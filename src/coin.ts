import { RawSigner, SuiExecuteTransactionResponse } from "@mysten/sui.js";
import { COIN_FUNCTIONS } from "./const";

export class Coin {
    public packageObject: string;
    public module: string;
    public treasuryObject: string;
    public name: string;
    public metadataObject?: string;

    public constructor(packageObject: string, module: string, treasury: string, name: string, metadata?: string) {
        this.packageObject = packageObject;
        this.module = module;
        this.treasuryObject = treasury;
        this.name = name;
        this.metadataObject = metadata;
    }

    public getType(): string {
        return this.packageObject + "::" + this.module + "::" + this.name;
    }

    public mintForTesting(signer: RawSigner, recipient: string): Promise<SuiExecuteTransactionResponse> {
        return signer.executeMoveCall({
            packageObjectId: this.packageObject,
            module: this.module,
            function: COIN_FUNCTIONS.MINT_FOR_TESTING,
            typeArguments: [],
            arguments: [this.treasuryObject, recipient],
            gasBudget: 1000,
        });
    }
}
