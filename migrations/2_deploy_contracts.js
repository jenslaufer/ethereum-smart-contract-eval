var registry = artifacts.require("./Registry.sol");
var simpleContractImpl = artifacts.require("./SimpleContractImplV1.sol");

module.exports = function(deployer) {
	deployer.deploy(registry);
	deployer.deploy(simpleContractImpl);
};