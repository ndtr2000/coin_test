module eth::eth {
    use sui::coin::{Self, TreasuryCap};
    use std::option;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct ETH has drop {}

    fun init(witness: ETH, ctx: &mut TxContext) {
        let (treasury, coin_metadata) = coin::create_currency (
            witness,
            8,
            b"ETH",
            b"Ethereum",
            b"Ethereum",
            option::none(),
            ctx
        );

        transfer::freeze_object(coin_metadata);
        transfer::transfer(treasury, tx_context::sender(ctx));
    }

    public entry fun mint_100(treasury: &mut TreasuryCap<ETH>, recipient: address, ctx: &mut TxContext) {
        transfer::transfer(coin::mint(treasury, 100000000, ctx), recipient)
    }

    public entry fun transfer(c: coin::Coin<ETH>, recipient: address) {
        transfer::transfer(c, recipient)
    }
}