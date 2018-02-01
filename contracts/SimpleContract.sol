pragma solidity ^0.4.2;

contract SimpleContract {
	address public owner;
    
    function SimpleContract() public{
    	owner = msg.sender;
    }

    function helloworld() public pure returns(string){
		return "helloworld";
	}


}