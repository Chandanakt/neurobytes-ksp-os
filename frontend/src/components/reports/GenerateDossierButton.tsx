import { FileDown } from "lucide-react";

import { generateDossier }
from "../../services/pdf/generateDossier";

export default function GenerateDossierButton() {
  return (
    <button
      onClick={generateDossier}
      className="
      bg-[#D4AF37]
      text-black
      px-4
      py-2
      rounded-lg
      flex
      items-center
      gap-2
      hover:opacity-90
      "
    >
      <FileDown size={18} />

      Generate Dossier
    </button>
  );
}