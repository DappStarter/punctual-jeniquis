require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember erosion hover entire front split'; 
let testAccounts = [
"0xd48a628f8437555bcbe5c60dfa9014871ad9bee5d384929e315ac2132947ff7b",
"0xc59a20a046de93119603f3913565be3a9928c52060bc8224bf9a4f22f0ff7184",
"0x3ed4afa7067b867a6f0e03af0d1eb436ade70824f8fbde50264511df322d3aa0",
"0xf28098ebe9fc1b8db8b0f4a96ea4b6d556c3415cb9e27792773f78ff33d0f60d",
"0xcb8bbe29429bb2fbd6c57f4f5e9c9de145fc9de8fe6748ed7462dd9f983e9c10",
"0x930696badfc63e1ebd6f6955dc73259306f1265ee27989c2ed37e3e074f4ed48",
"0xd7594c811db5da7e57c6f21371e46da1aea4b60909cc623278b5d9a9011a4fb3",
"0x9521c396662801179e3c4ed6374cb3bab113f2be01e2a0abf6feb126f60bb6c2",
"0x2347f0900a2de06dad5a913d2fb78893105ebcd92a0490b5afde34ba94be33d1",
"0x5c42030af720645dc8a7f867b05590c0ca854f500149af2f2fcdd4be7ea255ab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
