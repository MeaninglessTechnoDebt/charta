const CONSTANTS = require("./migration_constants");
const { generateParamsForDharmaMultiSigWallet } = require("./utils");

module.exports = (deployer, network, accounts) => {
    const OWNER = accounts[0];

    // Import the Dharma contracts.
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const DharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");
    const TokenRegistry = artifacts.require("TokenRegistry");
    const ContractRegistry = artifacts.require("ContractRegistry");
    const Collateralizer = artifacts.require("Collateralizer");

    const {
        signatories,
        numAuthorizationsRequired,
        timelock,
    } = generateParamsForDharmaMultiSigWallet(network);

    // Deploy the DharmaMultiSigWallet with a set of signatories, the number of
    // authorizations required before a transaction can be executed, and the
    // timelock period, defined in seconds.
    await deployer.deploy(DharmaMultiSigWallet, signatories, numAuthorizationsRequired, timelock);

    // Deploy our Permissions library and link it to the contracts in our protocol that depend on it.
    await deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, [DebtRegistry, TokenTransferProxy, Collateralizer, DebtToken]);

    await deployer.deploy(DebtRegistry);
    await deployer.deploy(DebtToken, DebtRegistry.address);
    await deployer.deploy(TokenTransferProxy);
    await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
    await deployer.deploy(DebtKernel, TokenTransferProxy.address);
    await deployer.deploy(
        Collateralizer,
        DebtKernel.address,
        DebtRegistry.address,
        TokenRegistry.address,
        TokenTransferProxy.address,
    );
    await deployer.deploy(TokenRegistry).then(async () => {
        if (network === CONSTANTS.LIVE_NETWORK_ID) {
            const tokenRegistry = await TokenRegistry.deployed();

            // Set the address of the tokens in the token registry.
            await Promise.all(
                CONSTANTS.TOKEN_LIST.map(async (token) => {
                    const { symbol, address, decimals, name } = token;

                    return tokenRegistry.setTokenAttributes(symbol, address, name, decimals, {
                        from: OWNER,
                    });
                }),
            );
        }
    });
    await deployer.deploy(
        ContractRegistry,
        Collateralizer.address,
        DebtKernel.address,
        DebtRegistry.address,
        DebtToken.address,
        RepaymentRouter.address,
        TokenRegistry.address,
        TokenTransferProxy.address,
    );
};
