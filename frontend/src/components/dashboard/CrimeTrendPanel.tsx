export default function TrendPanel() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-4">
        Crime Trends
      </h3>

      <div className="space-y-2">
        <p>↑ Theft +18%</p>
        <p>↑ Cyber Crime +24%</p>
        <p>↓ Vehicle Theft -6%</p>
      </div>
    </div>
  );
}