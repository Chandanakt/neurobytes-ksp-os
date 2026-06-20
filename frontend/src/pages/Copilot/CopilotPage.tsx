import { useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import VoiceControls from "../../components/chat/VoiceControls";
import ChatInput from "../../components/chat/ChatInput";
import ChatMessage from "../../components/chat/ChatMessage";
import EvidencePanel from "../../components/chat/EvidencePanel";

import GenerateDossierButton from "../../components/reports/GenerateDossierButton";

import { processCrimeQuery } from "../../services/crimeQueries";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function CopilotPage() {
  const [input, setInput] = useState("");

  const [language, setLanguage] = useState<
    "english" | "kannada"
  >("english");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to NeuroBytes AI. Ask me about FIRs, suspects, crime trends, criminal networks, hotspots or investigation insights.",
    },
  ]);

  const [lastResponse, setLastResponse] =
    useState<any>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const result = processCrimeQuery(input);

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const aiMessage: Message = {
      role: "assistant",
      content: result.summary,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setLastResponse(result);

    setInput("");
  };

  const handleSuggestedQuery = (query: string) => {
    setInput(query);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-2 md:px-0 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37]">
            AI Crime Intelligence Copilot
          </h1>

          <p className="text-slate-400 mt-2">
            English + Kannada Conversational Intelligence Platform
          </p>
        </div>

        {/* Top Controls */}
        <div className="flex flex-wrap gap-4 items-center">

          <VoiceControls />

          <GenerateDossierButton />

          <div className="flex gap-2 ml-auto">

            <button
              onClick={() => setLanguage("english")}
              className={`px-4 py-2 rounded-lg font-medium ${
                language === "english"
                  ? "bg-[#D4AF37] text-black"
                  : "bg-slate-900"
              }`}
            >
              English
            </button>

            <button
              onClick={() => setLanguage("kannada")}
              className={`px-4 py-2 rounded-lg font-medium ${
                language === "kannada"
                  ? "bg-[#D4AF37] text-black"
                  : "bg-slate-900"
              }`}
            >
              ಕನ್ನಡ
            </button>

          </div>
        </div>

        {/* AI Status Bar */}

        <div className="grid md:grid-cols-4 gap-4">

          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              AI Status
            </p>

            <h3 className="text-green-400 font-semibold">
              Operational
            </h3>
          </div>

          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Connected Records
            </p>

            <h3 className="font-semibold">
              12,450+
            </h3>
          </div>

          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Intelligence Sources
            </p>

            <h3 className="font-semibold">
              14 Active
            </h3>
          </div>

          <div className="bg-slate-900 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Language
            </p>

            <h3 className="font-semibold">
              {language === "english"
                ? "English"
                : "Kannada"}
            </h3>
          </div>

        </div>

        {/* Suggested Queries */}

        <div>
          <h2 className="text-lg font-semibold mb-3">
            Suggested Queries
          </h2>

          <div className="flex flex-wrap gap-2">

            {[
              "Show theft cases in Mysuru",
              "Repeat offenders in Bengaluru",
              "Cyber crime records",
              "Crime hotspots in Karnataka",
              "Risk score of repeat offenders",
              "ಕಳ್ಳತನ ಪ್ರಕರಣಗಳು",
              "ಮೈಸೂರು ಪ್ರಕರಣಗಳು",
            ].map((query) => (
              <button
                key={query}
                onClick={() =>
                  handleSuggestedQuery(query)
                }
                className="bg-slate-900 px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                {query}
              </button>
            ))}

          </div>
        </div>

        {/* Chat Area */}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Chat Window */}

          <div className="lg:col-span-2">

            <div className="bg-slate-950 rounded-xl p-6 h-[650px] flex flex-col border border-slate-800">

              <div className="flex-1 overflow-y-auto space-y-4 pr-2">

                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    role={message.role}
                    content={message.content}
                  />
                ))}

              </div>

              <div className="mt-4">

                <ChatInput
                  value={input}
                  onChange={setInput}
                  onSend={handleSend}
                />

              </div>

            </div>

          </div>

          {/* Intelligence Sidebar */}

          <div className="space-y-4">

            <div className="bg-slate-900 rounded-xl p-5">

              <h2 className="font-semibold mb-3">
                Investigation Leads
              </h2>

              <ul className="space-y-2 text-sm text-slate-300">

                <li>
                  • Repeat offender pattern detected
                </li>

                <li>
                  • Linked FIR found in another district
                </li>

                <li>
                  • Similar modus operandi detected
                </li>

                <li>
                  • Financial transaction anomaly
                </li>

              </ul>

            </div>

            <div className="bg-slate-900 rounded-xl p-5">

              <h2 className="font-semibold mb-3">
                AI Capabilities
              </h2>

              <ul className="space-y-2 text-sm text-slate-300">

                <li>✓ Crime Pattern Discovery</li>
                <li>✓ Criminal Network Analysis</li>
                <li>✓ Offender Profiling</li>
                <li>✓ Trend Analytics</li>
                <li>✓ Crime Forecasting</li>
                <li>✓ Explainable AI</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Explainable AI */}

        {lastResponse && (
          <EvidencePanel
            confidence={lastResponse.confidence}
            reasoning={lastResponse.reasoning}
            evidence={lastResponse.evidence}
            leads={lastResponse.leads}
           />
        )}

      </div>
    </DashboardLayout>
  );
}