import { Mic, Send } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="flex gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask NeuroBytes AI..."
        className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-3"
      />

      <button className="bg-slate-900 p-3 rounded-lg">
        <Mic />
      </button>

      <button
        onClick={onSend}
        className="bg-[#00C2FF] text-black px-4 rounded-lg"
      >
        <Send />
      </button>
    </div>
  );
}