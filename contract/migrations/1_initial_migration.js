const FPDS = artifacts.require("FPDS");

module.exports = function (deployer) {
  deployer.deploy(FPDS, [
    "0x7B96c6E49914067e69e68F2e606b8693A9893540",
    "0x9a4ab631E2d2699A23D3869751166CC79F2364ad",
    "0x64a339884648c7c99d293Af4c95E39982A65cd4E",
  ]);
};
