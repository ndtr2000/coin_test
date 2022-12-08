import { JsonRpcProvider, RawSigner, Base64DataBuffer, getTransactionEffects } from "@mysten/sui.js";

import { Coin } from "./coin";
import { ETH_COIN_MODULE, ETH_COIN_PACKAGE, ETH_COIN_TREASURY, ETH_COIN_TYPE, KEY_PAIR } from "./const";

// example script for swap
async function main() {
    const provider = new JsonRpcProvider();

    const signer = new RawSigner(KEY_PAIR, provider);
    const address = await signer.getAddress();
    console.log(address);

    const eth = new Coin(ETH_COIN_PACKAGE, ETH_COIN_MODULE, ETH_COIN_TREASURY, ETH_COIN_TYPE);

    // Mint token for testing
    const tx = await eth.mintForTesting(signer, "0x" + address);
    console.log(getTransactionEffects(tx)?.created);

    console.log(getTransactionEffects(tx)?.created);
}

main();
