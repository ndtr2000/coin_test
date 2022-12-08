import { Ed25519Keypair } from "@mysten/sui.js";

export const COIN_FUNCTIONS = {
    MINT_FOR_TESTING: "mint_100",
};

export const KEY_PAIR = Ed25519Keypair.fromSecretKey(
    Uint8Array.from([
        144, 81, 251, 63, 176, 203, 203, 177, 164, 222, 224, 6, 7, 245, 5, 188, 208, 208, 241, 46, 29, 176, 58, 135,
        217, 37, 144, 42, 136, 93, 224, 233, 8, 180, 3, 45, 165, 143, 83, 96, 211, 155, 191, 213, 67, 134, 144, 254, 31,
        194, 82, 2, 69, 131, 36, 160, 206, 196, 125, 176, 139, 100, 35, 222,
    ])
);

export const ETH_COIN_TYPE = "ETH";
export const ETH_COIN_MODULE = "eth";
export const ETH_COIN_PACKAGE = "0x3de6f0de874d89dcc955f4f9a0d9c8743b709c85";
export const ETH_COIN_TREASURY = "0x706e0fff02edb7247fb4fa2e59b86be535f0ea32";

export const SUI_COIN_TYPE = "SUI";
export const SUI_COIN_MODULE = "sui";
export const SUI_COIN_PACKAGE = "0x2";
export const SUI_COIN_TREASURY = "0x0";
