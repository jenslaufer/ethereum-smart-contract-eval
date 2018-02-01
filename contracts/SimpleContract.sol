pragma solidity ^0.4.2;

contract SimpleContract {
	address  owner;
    
    function SimpleContract() public {
    	owner = msg.sender;
    }

    function kill() {
       if (owner == msg.sender) { // We check who is calling
          selfdestruct(owner); //Destruct the contract
       }
    }

    function helloworld() public pure returns(string){
		return "helloworld";
	}


}