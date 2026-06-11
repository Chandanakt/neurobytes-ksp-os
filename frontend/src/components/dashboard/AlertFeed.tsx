export default function AlertFeed() {
  const alerts = [
    "Repeat offender match detected",
    "Emerging theft cluster in Mysuru",
    "High-risk financial transaction network",
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-4">
        AI Alert Feed
      </h3>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert}
            className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg"
          >
            🚨 {alert}
          </div>
        ))}
      </div>
    </div>
  );
}