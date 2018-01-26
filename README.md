# Evaluation with Ethereum Smart Contracts 


This little Project contains a simple smart contracts. The project is about understanding the livecycle of development of etherum smart contracts with docker.

## Steps

   - compilation of contract

     ```{shell}
       docker run --rm -v ${PWD}:/solidity ethereum/solc:stable --optimize --bin --abi --hashes -o /solidity/build --overwrite /solidity/helloworld.sol
     ```

