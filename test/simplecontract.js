var SimpleContract = artifacts.require("./SimpleContract.sol");

contract('SimpleContract', function(accounts) {
	it("should return hello world", function() {
		return SimpleContract.deployed().then(function(instance) {
			return instance.helloworld.call();
		}).then(function(txt) {
			assert.equal(txt.valueOf(), "helloworld", "hello world isn#t returned");
		});
	});
});