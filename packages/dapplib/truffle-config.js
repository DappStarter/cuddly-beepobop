require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom private boil suggest name raise night puppy hunt beach swing giant'; 
let testAccounts = [
"0x08960386366520b9ab183cc5e3a335812dbaa3b4c6fb213aff8b04d823a1af02",
"0x6922596253197c6668ce7f800bfc00bc705d4e2e46d0e1ed3b0d8f85d97a037a",
"0x6c084cbe491181cc12e0d8a94b0bf05745ce7b5b7db9c3976bd8e62e55fb24b8",
"0x551ec76b85b10a51998e2e65025fb0434285119cf9a7e974642656325721e690",
"0x7d9abcc62e1588aacb11d8f84d6769b83e9f247d8645bfaf295cb5071d9e744c",
"0x331aa817a7fc390250726ccc6d3a7688008169849f8ab6ded831ca783d6c0a74",
"0x065f3d71513f901e18096bbb5d5b219ff1750ac5b88bba92e22a313aa784e21f",
"0x18dafb32877201d53ae68ac58b2898a6939f50f48fcf2d53daf729389af80e10",
"0x0dde199331d1606d13b3acc45dc03a7f791599454744badebf5ba4aad30d4785",
"0x51c1685ab821db98751824a9099c7a5eaf8156f1b7c363a4ca10a108ddb73d45"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


