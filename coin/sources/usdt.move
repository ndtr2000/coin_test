module usdt::usdt {
    use sui::coin::{Self, TreasuryCap};
    use std::option;
    use sui::transfer;
    use sui::tx_context::{TxContext};

    struct USDT has drop {}

    fun init(witness: USDT, ctx: &mut TxContext) {
        let (treasury, coin_metadata) = coin::create_currency (
            witness,
            8,
            b"USDT",
            b"Tether USD",
            b"Tether USD",
            option::none(),
            ctx
        );

        transfer::freeze_object(coin_metadata);
        transfer::share_object(treasury);
    }

    public entry fun mint_100(treasury: &mut TreasuryCap<USDT>, recipient: address, ctx: &mut TxContext) {
        transfer::transfer(coin::mint(treasury, 100000000, ctx), recipient)
    }

    public entry fun transfer(c: coin::Coin<USDT>, recipient: address) {
        transfer::transfer(c, recipient)
    }
}