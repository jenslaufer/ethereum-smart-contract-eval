var SimpleContract = artifacts.require("./SimpleContract.sol");

contract('SimpleContract', function(accounts) {
	it("should return hello world", function() {
		return SimpleContract.deployed().then(function(instance) {
			return instance.helloworld.call();
		}).then(function(txt) {
			assert.equal(txt.valueOf(), "helloworld", "hello world isn#t returned");
		});
	});



	it("should return owner", function() {
		return SimpleContract.deployed().then(function(instance) {
			return instance.owner.call();
		}).then(function(address) {
			assert.equal(address, accounts[0], "hello world isn#t returned");
		});
	});
});