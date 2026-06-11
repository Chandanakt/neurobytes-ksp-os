export default function HotspotPanel() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-4">
        Crime Hotspots
      </h3>

      <div className="space-y-3">
        <div>Mysuru South - High Risk</div>
        <div>Bengaluru Urban - Critical</div>
        <div>Mandya - Moderate</div>
      </div>
    </div>
  );
}