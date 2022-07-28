window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "atlantic-1",
    chainName: "sei_test",
    rpc: "http://78.107.234.44:16657", // replace with your rpc url
    rest: "http://78.107.234.44:1317", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "sei",
        bech32PrefixAccPub: "sei" + "pub",
        bech32PrefixValAddr: "sei" + "valoper",
        bech32PrefixValPub: "sei" + "valoperpub",
        bech32PrefixConsAddr: "sei" + "valcons",
        bech32PrefixConsPub: "sei" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "SEI", 
            coinMinimalDenom: "usei", 
            coinDecimals: 6, 
            coinGeckoId: "uatom", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "SEI",
            coinMinimalDenom: "usei",
            coinDecimals: 6,
            coinGeckoId: "usei",
        },
    ],
    stakeCurrency: {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
        coinGeckoId: "usei",
      },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
