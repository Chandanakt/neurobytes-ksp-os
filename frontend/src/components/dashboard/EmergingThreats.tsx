export default function EmergingThreats() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">

      <h3 className="text-xl font-semibold text-red-400">
        Emerging Threat Alerts
      </h3>

      <div className="space-y-3 mt-4">

        <div className="bg-red-900/20 p-3 rounded-lg">
          Cybercrime increased 18%
        </div>

        <div className="bg-yellow-900/20 p-3 rounded-lg">
          Theft cluster detected in Mysuru
        </div>

        <div className="bg-orange-900/20 p-3 rounded-lg">
          Repeat offender activity rising
        </div>

      </div>

    </div>
  );
}