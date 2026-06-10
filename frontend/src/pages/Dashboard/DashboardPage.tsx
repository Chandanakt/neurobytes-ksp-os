import { Card, CardContent } from "../../components/ui/card";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Crimes",
      value: "125,432",
    },
    {
      title: "Active Cases",
      value: "8,214",
    },
    {
      title: "Repeat Offenders",
      value: "1,892",
    },
    {
      title: "High Risk Alerts",
      value: "24",
    },
  ];

  return (
    <div className="min-h-screen bg-[#071321] text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#D4AF37]">
          NeuroBytes KSP OS
        </h1>

        <p className="text-slate-400 mt-2">
          Karnataka State Police Crime Intelligence Platform
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <Card
            key={item.title}
            className="bg-slate-900 border-slate-800"
          >
            <CardContent className="p-6">
              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {item.value}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}