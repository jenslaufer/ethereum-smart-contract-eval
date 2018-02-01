pragma solidity ^0.4.2;

contract SimpleContract {
	address owner_;
    
    function SimpleContract() public{
    	owner_ = msg.sender;
    }

    function helloworld() public view returns(string){
		return "helloworld";
	}


}