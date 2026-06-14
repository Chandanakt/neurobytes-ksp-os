/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const result = {
        success: true,

        extractedText:
            "Theft reported near Mysuru South. Suspects Ravi Kumar and Manjunath seen using vehicle KA09AB1234.",

        entities: {
            persons: [
                "Ravi Kumar",
                "Manjunath"
            ],

            vehicles: [
                "KA09AB1234"
            ],

            locations: [
                "Mysuru South"
            ],

            crimeType:
                "Theft"
        },

        riskScore: 84,

        aiSummary:
            "Multiple repeat offenders detected. Similar FIRs reported nearby."
    };

    basicIO.write(
        JSON.stringify(result)
    );

    context.close();
};