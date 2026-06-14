/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const network = {
        success: true,

        nodes: [
            {
                id: "SUS001",
                label: "Ravi Kumar",
                type: "Suspect"
            },

            {
                id: "SUS002",
                label: "Manjunath",
                type: "Suspect"
            },

            {
                id: "VEH001",
                label: "KA09AB1234",
                type: "Vehicle"
            },

            {
                id: "LOC001",
                label: "Mysuru South",
                type: "Location"
            }
        ],

        edges: [
            {
                source: "SUS001",
                target: "VEH001",
                relation: "Used"
            },

            {
                source: "SUS002",
                target: "VEH001",
                relation: "Shared"
            },

            {
                source: "SUS001",
                target: "LOC001",
                relation: "Visited"
            }
        ],

        insights: [
            "Vehicle shared by multiple suspects",
            "Repeat offender detected",
            "Possible organized crime cluster"
        ],

        riskScore: 87
    };

    basicIO.write(
        JSON.stringify(network)
    );

    console.log(
        "network-analysis executed"
    );

    context.close();
};