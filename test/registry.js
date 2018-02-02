var registry = artifacts.require("./Registry.sol");

contract('Registry', function(accounts) {

	it("should return owner", function() {
		return registry.deployed().then(function(instance) {
			return instance.owner.call();
		}).then(function(address) {
			assert.equal(address, accounts[0], "owner address is not the same");
		});
	});

	it("should return empty address", function() {
		return registry.deployed().then(function(instance) {
			return instance.contractAddress.call();
		}).then(function(address) {
			assert.equal(address, '0x0000000000000000000000000000000000000000', "contract  address is wrong");
		});

	});

	it("should return last contract address", function() {
		return registry.deployed().then(function(instance) {
		    instance.setContractAddress.call(accounts[0]);
		});

		return registry.deployed().then(function(instance) {
			return instance.contractAddress.call();
		}).then(function(address) {
			assert.equal(address, accounts[0], "contract  address is wrong");
		});

	});


});

