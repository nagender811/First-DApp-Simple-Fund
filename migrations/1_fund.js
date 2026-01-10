const Funder = artifacts.require("Funder");

module.exports = function (deployer) {
    deployer.deploy(Funder,  { gas: 5000000 })
}