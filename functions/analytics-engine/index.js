/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const analytics = {
        success: true,

        totalCrimes: 125432,

        activeCases: 8214,

        repeatOffenders: 1487,

        hotspots: [
            "Mysuru South",
            "Bengaluru Urban",
            "Mandya"
        ],

        crimeTrends: [
            {
                crimeType: "Theft",
                count: 124
            },
            {
                crimeType: "Cyber Crime",
                count: 82
            },
            {
                crimeType: "Fraud",
                count: 63
            }
        ],

        forecast: {
            nextMonthCrimes: 138500,
            riskLevel: "High"
        }
    };

    basicIO.write(
        JSON.stringify(analytics)
    );

    console.log(
        "analytics-engine executed successfully"
    );

    context.close();
};