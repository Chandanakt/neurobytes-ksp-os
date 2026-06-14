type Trend = {
  crimeType: string;
  count: number;
};

const trends: Trend[] = [
  {
    crimeType: "Theft",
    count: 124,
  },
  {
    crimeType: "Cyber Crime",
    count: 82,
  },
  {
    crimeType: "Fraud",
    count: 63,
  },
  {
    crimeType: "Vehicle Theft",
    count: 42,
  },
];

export default function CrimeTrendPanel() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Crime Trends
      </h3>

      <div className="space-y-3">
        {trends.map((trend) => (
          <div
            key={trend.crimeType}
            className="flex justify-between items-center border-b border-slate-800 pb-2"
          >
            <span className="text-slate-300">
              {trend.crimeType}
            </span>

            <span className="font-bold text-[#D4AF37]">
              {trend.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}