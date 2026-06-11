import { Mic, MicOff, Volume2 } from "lucide-react";
import { useState } from "react";

export default function VoiceControls() {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(!listening);
  };

  const speakResponse = () => {
    const text =
      "2 theft cases found in Mysuru";

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={startListening}
        className={`p-3 rounded-lg ${
          listening
            ? "bg-red-500"
            : "bg-[#D4AF37]"
        }`}
      >
        {listening ? (
          <MicOff />
        ) : (
          <Mic />
        )}
      </button>

      <button
        onClick={speakResponse}
        className="p-3 rounded-lg bg-cyan-500"
      >
        <Volume2 />
      </button>
    </div>
  );
}