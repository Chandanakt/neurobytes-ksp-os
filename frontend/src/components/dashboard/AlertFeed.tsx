type Alert = {
  message: string;
  severity: "Critical" | "High" | "Medium";
};

const alerts: Alert[] = [
  {
    message: "Repeat offender match detected",
    severity: "Critical",
  },
  {
    message: "Emerging theft cluster in Mysuru",
    severity: "High",
  },
  {
    message: "High-risk financial transaction network",
    severity: "Critical",
  },
  {
    message: "Cybercrime activity increasing in Bengaluru",
    severity: "Medium",
  },
];

export default function AlertFeed() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-4 text-white">
        AI Alert Feed
      </h3>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.message}
            className={`p-3 rounded-lg border ${
              alert.severity === "Critical"
                ? "bg-red-500/10 border-red-500/30"
                : alert.severity === "High"
                ? "bg-orange-500/10 border-orange-500/30"
                : "bg-yellow-500/10 border-yellow-500/30"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{alert.message}</span>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  alert.severity === "Critical"
                    ? "bg-red-500 text-white"
                    : alert.severity === "High"
                    ? "bg-orange-500 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {alert.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}