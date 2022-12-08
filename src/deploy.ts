import { JsonRpcProvider, RawSigner, Base64DataBuffer, getTransactionEffects } from "@mysten/sui.js";
import { execSync } from "child_process";
import * as fs from "fs";
import { KEY_PAIR } from "./const";

const deployPackage = async (signer: RawSigner, packagePath: string, fileName: string) => {
    const compiledModules = JSON.parse(
        execSync(`sui move build --dump-bytecode-as-base64 --path ${packagePath}`, { encoding: "utf-8" })
    );
    const publishTxn = await signer.publish({
        compiledModules: compiledModules,
        gasBudget: 10000,
    });
    const transactionEffects = getTransactionEffects(publishTxn);
    fs.writeFileSync(fileName, JSON.stringify(transactionEffects?.created));
    console.log("publishTxn", transactionEffects?.created);
};

async function main() {
    const provider = new JsonRpcProvider();

    const signer = new RawSigner(KEY_PAIR, provider);
    const address = await signer.getAddress();
    console.log(address);

    // Faucet;
    // await provider.requestSuiFromFaucet(address);

    await deployPackage(signer, "./coin/", "./testCoin.json");
}

main();
