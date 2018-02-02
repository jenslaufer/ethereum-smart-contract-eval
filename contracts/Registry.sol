pragma solidity ^ 0.4.2;

contract Registry {
  address public owner;
  address public contractAddress;

  function Registry() public {
    owner = msg.sender;
  }

  function kill() public {
    if (owner == msg.sender) { 
      selfdestruct(owner); 
    }
  }

  function setContractAddress(address addr) public  {
    contractAddress = addr;
  }


}