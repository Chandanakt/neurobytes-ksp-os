/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const reportData = {

        success: true,

        reportId: "KSP-CID-2026-001",

        district: "Mysuru",

        crimeType: "Theft",

        location: "Mysuru South",

        riskScore: 84,

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

        vehicles: [
            "KA09AB1234",
            "KA09CD5678"
        ],

        hotspots: [
            "Mysuru South",
            "Nazarbad",
            "Lashkar Mohalla"
        ]
    };

    basicIO.write(
        JSON.stringify(reportData)
    );

    context.close();
};