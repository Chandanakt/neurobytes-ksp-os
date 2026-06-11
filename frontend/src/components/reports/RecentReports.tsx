export default function RecentReports() {
  const reports = [
    "Mysuru Theft Intelligence Report",
    "Cybercrime Trend Analysis",
    "Repeat Offender Profile",
    "Organized Crime Network Report",
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Reports
      </h2>

      <div className="space-y-3">
        {reports.map((report) => (
          <div
            key={report}
            className="bg-slate-800 p-3 rounded-lg"
          >
            {report}
          </div>
        ))}
      </div>
    </div>
  );
}