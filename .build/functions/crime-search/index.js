/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const response = {
        success: true,

        results: [
            {
                firId: "FIR-2026-1001",
                crimeType: "Theft",
                district: "Mysuru",
                status: "Open"
            },
            {
                firId: "FIR-2026-1002",
                crimeType: "Cyber Crime",
                district: "Bengaluru",
                status: "Under Investigation"
            },
            {
                firId: "FIR-2026-1003",
                crimeType: "Fraud",
                district: "Mandya",
                status: "Closed"
            }
        ]
    };

    basicIO.write(
        JSON.stringify(response)
    );

    context.close();
};