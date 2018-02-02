pragma solidity ^ 0.4.2;

contract SimpleContractImplV1 {
  address public owner;

  function SimpleContractImplV1() public {
    owner = msg.sender;
  }

  function kill() public {
    if (owner == msg.sender) { // We check who is calling
      selfdestruct(owner); //Destruct the contract
    }
  }

  function helloworld() public pure returns(string) {
    return "helloworld";
  }


}