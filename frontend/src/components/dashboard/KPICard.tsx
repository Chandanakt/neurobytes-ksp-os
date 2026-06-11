type KPICardProps = {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
};

export default function KPICard({
  title,
  value,
  change,
  positive = true,
}: KPICardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>
    </div>
  );
}