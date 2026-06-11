type Props = {
  findings: string[];
  riskScore: number;
};

export default function NetworkFindings({
  findings,
  riskScore,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-xl p-5">

      <h3 className="text-xl font-semibold text-[#D4AF37]">
        Intelligence Findings
      </h3>

      <div className="mt-4">

        <p className="text-sm text-slate-400">
          Network Risk Score
        </p>

        <p className="text-3xl font-bold text-red-400">
          {riskScore}
        </p>

      </div>

      <ul className="mt-4 space-y-2">
        {findings.map((finding) => (
          <li
            key={finding}
            className="text-slate-300"
          >
            • {finding}
          </li>
        ))}
      </ul>

    </div>
  );
}