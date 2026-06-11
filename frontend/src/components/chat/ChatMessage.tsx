type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: Props) {
  return (
    <div
      className={`max-w-3xl p-4 rounded-xl ${
        role === "user"
          ? "bg-[#00C2FF] text-black ml-auto"
          : "bg-slate-900 text-white"
      }`}
    >
      {content}
    </div>
  );
}