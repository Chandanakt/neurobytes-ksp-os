import { Upload, FileText } from "lucide-react";
import { useRef, useState } from "react";

import { processFIR } from "../../services/catalyst/firProcessor";
import { extractOCR } from "../../services/catalyst/ocrService";

export default function FIRUploadCard() {
  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [analysis, setAnalysis] =
    useState<any>(null);

  const [ocrResult, setOcrResult] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0] || null;

    setSelectedFile(file);

    if (!file) return;

    try {
      setLoading(true);

      console.log(
        "Selected file:",
        file.name
      );

      const ocr =
        await extractOCR();

      console.log(
        "OCR Result:",
        ocr
      );

      setOcrResult(ocr);

      const result =
        await processFIR();

      console.log(
        "FIR Analysis:",
        result
      );

      setAnalysis(result);
    } catch (error) {
      console.error(
        "FIR processing failed:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="text-[#D4AF37]" />

        <h2 className="text-xl font-semibold">
          FIR Intelligence Engine
        </h2>
      </div>

      <div className="border-2 border-dashed border-slate-700 rounded-xl p-10 text-center hover:border-[#D4AF37] transition">
        <Upload
          size={40}
          className="mx-auto mb-4 text-slate-400"
        />

        <h3 className="text-lg font-medium">
          Upload FIR Document
        </h3>

        <p className="text-slate-400 mt-2">
          Upload PDF, Image or Scanned FIR
        </p>

        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          onClick={handleSelectFile}
          className="mt-5 bg-[#D4AF37] text-black px-5 py-2 rounded-lg font-medium hover:opacity-90"
        >
          Select File
        </button>

        {selectedFile && (
          <div className="mt-4 text-green-400">
            Selected: {selectedFile.name}
          </div>
        )}

        {loading && (
          <div className="mt-4 text-cyan-400">
            Processing FIR...
          </div>
        )}

        {/* OCR Result */}

        {ocrResult && (
          <div className="mt-6 bg-slate-800 rounded-lg p-4 text-left">
            <h3 className="font-bold text-cyan-400">
              OCR Extraction
            </h3>

            <p className="mt-3 text-slate-300">
              {ocrResult.extractedText}
            </p>

            <div className="mt-4 space-y-2">
              <div>
                <strong>FIR Number:</strong>{" "}
                {ocrResult.entities.firNumber}
              </div>

              <div>
                <strong>Crime:</strong>{" "}
                {ocrResult.entities.crimeType}
              </div>

              <div>
                <strong>Persons:</strong>{" "}
                {ocrResult.entities.persons.join(
                  ", "
                )}
              </div>

              <div>
                <strong>Vehicle:</strong>{" "}
                {ocrResult.entities.vehicles.join(
                  ", "
                )}
              </div>

              <div>
                <strong>Location:</strong>{" "}
                {ocrResult.entities.locations.join(
                  ", "
                )}
              </div>
            </div>
          </div>
        )}

        {/* AI Intelligence */}

        {analysis && (
          <div className="mt-6 bg-slate-800 rounded-lg p-4 text-left">
            <h3 className="font-bold text-[#D4AF37]">
              AI Intelligence Result
            </h3>

            <p className="mt-3 text-slate-300">
              {analysis.aiSummary}
            </p>

            <div className="mt-4 space-y-2">
              <div>
                <strong>Crime Type:</strong>{" "}
                {analysis.entities.crimeType}
              </div>

              <div>
                <strong>Location:</strong>{" "}
                {analysis.entities.locations.join(
                  ", "
                )}
              </div>

              <div>
                <strong>Vehicle:</strong>{" "}
                {analysis.entities.vehicles.join(
                  ", "
                )}
              </div>

              <div>
                <strong>Persons:</strong>{" "}
                {analysis.entities.persons.join(
                  ", "
                )}
              </div>
            </div>

            <div className="mt-4 bg-red-900/30 border border-red-700 rounded-lg p-3">
              <p className="text-red-400 font-bold text-lg">
                Risk Score: {analysis.riskScore}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            Documents Processed
          </p>

          <h3 className="text-2xl font-bold mt-1">
            1,248
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            OCR Accuracy
          </p>

          <h3 className="text-2xl font-bold mt-1 text-green-400">
            98%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-400 text-sm">
            AI Extraction
          </p>

          <h3 className="text-2xl font-bold mt-1 text-cyan-400">
            Active
          </h3>
        </div>
      </div>
    </div>
  );
}