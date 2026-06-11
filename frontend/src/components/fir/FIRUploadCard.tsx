import { Upload, FileText } from "lucide-react";

export default function FIRUploadCard() {
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

        <button className="mt-5 bg-[#D4AF37] text-black px-5 py-2 rounded-lg font-medium hover:opacity-90">
          Select File
        </button>
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