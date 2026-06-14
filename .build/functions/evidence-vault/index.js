/**
 *
 * @param {import('./types/basicio').Context} context
 * @param {import('./types/basicio').BasicIO} basicIO
 */

module.exports = (context, basicIO) => {

    const evidence = {
        success: true,

        evidenceId: "EV-2026-001",

        fileName: "FIR_Theft_Mysuru.pdf",

        classification: "CONFIDENTIAL",

        uploadedAt: new Date(),

        status: "Stored",

        storageType: "Evidence Vault"
    };

    basicIO.write(
        JSON.stringify(evidence)
    );

    context.close();
};