export default function NetworkInsights() {
  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold">
        AI Intelligence Summary
      </h2>

      <div className="space-y-4 mt-4">
        <div>
          <p className="text-[#D4AF37]">
            Risk Level
          </p>

          <p className="text-red-400">
            HIGH
          </p>
        </div>

        <div>
          <p className="text-[#D4AF37]">
            Network Size
          </p>

          <p>12 Connected Entities</p>
        </div>

        <div>
          <p className="text-[#D4AF37]">
            Organized Crime Probability
          </p>

          <p>86%</p>
        </div>

        <div>
          <p className="text-[#D4AF37]">
            Recommendation
          </p>

          <p>
            Investigate financial and mobile
            communication links.
          </p>
        </div>
      </div>
    </div>
  );
}