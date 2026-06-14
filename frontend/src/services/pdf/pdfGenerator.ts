import jsPDF from "jspdf";

export function generateKSPReport(report: any) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(18);
  doc.text(
    "KARNATAKA STATE POLICE",
    20,
    y
  );

  y += 10;

  doc.setFontSize(14);
  doc.text(
    "Crime Intelligence Dossier",
    20,
    y
  );

  y += 15;

  doc.setFontSize(11);

  doc.text(
    `Report ID: ${report.reportId}`,
    20,
    y
  );

  y += 8;

  doc.text(
    `District: ${report.district}`,
    20,
    y
  );

  y += 8;

  doc.text(
    `Crime Type: ${report.crimeType}`,
    20,
    y
  );

  y += 8;

  doc.text(
    `Location: ${report.location}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(13);

  doc.text(
    "Identified Suspects",
    20,
    y
  );

  y += 10;

  report.suspects.forEach(
    (suspect: any) => {
      doc.setFontSize(11);

      doc.text(
        `${suspect.name} (${suspect.risk})`,
        25,
        y
      );

      y += 8;
    }
  );

  y += 10;

  doc.setFontSize(13);

  doc.text(
    "Associated Vehicles",
    20,
    y
  );

  y += 10;

  report.vehicles.forEach(
    (vehicle: string) => {
      doc.setFontSize(11);

      doc.text(
        vehicle,
        25,
        y
      );

      y += 8;
    }
  );

  y += 10;

  doc.setFontSize(13);

  doc.text(
    "Crime Hotspots",
    20,
    y
  );

  y += 10;

  report.hotspots.forEach(
    (hotspot: string) => {
      doc.setFontSize(11);

      doc.text(
        hotspot,
        25,
        y
      );

      y += 8;
    }
  );

  y += 15;

  doc.setFontSize(14);

  doc.text(
    `Risk Score: ${report.riskScore}`,
    20,
    y
  );

  doc.save(
    `${report.reportId}.pdf`
  );
}