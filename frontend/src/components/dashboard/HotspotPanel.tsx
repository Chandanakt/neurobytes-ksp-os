type Hotspot = {
  district: string;
  risk: string;
};

const hotspots: Hotspot[] = [
  {
    district: "Mysuru South",
    risk: "High",
  },
  {
    district: "Bengaluru Urban",
    risk: "Critical",
  },
  {
    district: "Mandya",
    risk: "Moderate",
  },
];

export default function HotspotPanel() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Crime Hotspots
      </h3>

      <div className="space-y-3">
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.district}
            className="flex justify-between items-center border-b border-slate-800 pb-2"
          >
            <span className="text-slate-300">
              {hotspot.district}
            </span>

            <span
              className={`font-bold ${
                hotspot.risk === "Critical"
                  ? "text-red-400"
                  : hotspot.risk === "High"
                  ? "text-orange-400"
                  : "text-yellow-400"
              }`}
            >
              {hotspot.risk}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}