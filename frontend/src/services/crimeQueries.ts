export function processCrimeQuery(query: string) {
  const q = query.toLowerCase();

  // Theft Cases

  if (
    q.includes("theft") ||
    q.includes("ಕಳ್ಳತನ")
  ) {
    return {
      summary:
        "24 theft cases identified in Mysuru district. Most incidents occurred near commercial zones between 6 PM and 10 PM.",

      confidence: 93,

      reasoning: [
        "Matched crime type: Theft",
        "Matched district: Mysuru",
        "Analyzed historical FIR records",
      ],

      evidence: [
        "FIR-2026-001",
        "FIR-2026-011",
        "FIR-2026-014",
      ],

      leads: [
        "Investigate repeat offender connections",
        "Review CCTV near hotspots",
        "Check vehicle movement records",
      ],
    };
  }

  // Repeat Offenders

  if (
    q.includes("repeat") ||
    q.includes("habitual")
  ) {
    return {
      summary:
        "Three repeat offenders identified. Highest risk offender linked to 7 prior incidents across Bengaluru and Mysuru.",

      confidence: 96,

      reasoning: [
        "Matched repeat offender profile",
        "Cross-district linkage found",
        "Repeated modus operandi detected",
      ],

      evidence: [
        "ACC-102",
        "ACC-233",
        "ACC-411",
      ],

      leads: [
        "Review associate network",
        "Check financial records",
        "Generate offender profile report",
      ],
    };
  }

  // Cyber Crime

  if (
    q.includes("cyber") ||
    q.includes("fraud")
  ) {
    return {
      summary:
        "Cybercrime activity increased by 18% compared to last quarter. Bengaluru Urban remains the highest-risk zone.",

      confidence: 91,

      reasoning: [
        "Matched cybercrime dataset",
        "Trend analysis completed",
      ],

      evidence: [
        "CYB-001",
        "CYB-004",
        "CYB-010",
      ],

      leads: [
        "Monitor financial transaction anomalies",
        "Review phishing complaint clusters",
      ],
    };
  }

  // Hotspots

  if (
    q.includes("hotspot") ||
    q.includes("crime hotspot")
  ) {
    return {
      summary:
        "Crime hotspots detected in Bengaluru Urban, Mysuru South and Mangaluru Central.",

      confidence: 89,

      reasoning: [
        "Hotspot clustering completed",
        "Location density analysis performed",
      ],

      evidence: [
        "District Crime Registry",
        "Historical FIR Records",
      ],

      leads: [
        "Increase patrol deployment",
        "Monitor repeat incident zones",
      ],
    };
  }

  // Network Analysis

  if (
    q.includes("network") ||
    q.includes("gang")
  ) {
    return {
      summary:
        "A suspected network of 6 individuals was detected through shared FIR references and repeated location overlap.",

      confidence: 95,

      reasoning: [
        "Shared suspects detected",
        "Location overlap detected",
        "Relationship graph analyzed",
      ],

      evidence: [
        "NET-01",
        "NET-02",
        "NET-03",
      ],

      leads: [
        "Review communication records",
        "Generate network dossier",
      ],
    };
  }

  // Default

  return {
    summary:
      "No direct intelligence match found. Please refine your query.",

    confidence: 60,

    reasoning: [
      "Unable to identify a crime category",
    ],

    evidence: [],

    leads: [
      "Try specifying district",
      "Try specifying crime type",
    ],
  };
}