/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const result = {

        success: true,

        extractedText:
            "FIR Number 124. Theft reported near Mysuru South. Suspects Ravi Kumar and Manjunath were seen using vehicle KA09AB1234.",

        entities: {

            firNumber: "124",

            crimeType: "Theft",

            persons: [
                "Ravi Kumar",
                "Manjunath"
            ],

            vehicles: [
                "KA09AB1234"
            ],

            locations: [
                "Mysuru South"
            ]
        }
    };

    basicIO.write(
        JSON.stringify(result)
    );

    context.close();
};