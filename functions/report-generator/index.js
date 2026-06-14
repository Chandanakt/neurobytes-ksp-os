/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const report = {

        success: true,

        reportId: "KSP-CID-2026-001",

        classification: "CONFIDENTIAL",

        district: "Mysuru",

        generatedAt: new Date(),

        reportType:
            "Crime Intelligence Dossier",

        executiveSummary:
  "Recurring theft network detected in Mysuru South.",

        incidentDetails: {
            crimeType: "Theft",
            location: "Mysuru South",
            dateRange: "Last 30 Days"
        },

        suspects: [
            {
                name: "Ravi Kumar",
                risk: "HIGH"
            },
            {
                name: "Manjunath",
                risk: "MEDIUM"
            }
        ],

        associatedVehicles: [
            "KA09AB1234",
            "KA09CD5678"
        ],

        hotspots: [
            "Mysuru South",
            "Nazarbad",
            "Lashkar Mohalla"
        ],

        networkFindings: [
  "Shared vehicle usage.",
  "Repeat offender links."
],

        riskAssessment: {
            score: 84,
            level: "HIGH"
        },

        recommendations: [
  "Initiate surveillance.",
  "Track vehicle movement."
]
    };

    basicIO.write(
        JSON.stringify(report)
    );

    context.close();
};