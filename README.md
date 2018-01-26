# Evaluation with Ethereum Smart Contracts 


This little Project contains a simple smart contracts. The project is about understanding the livecycle of development of etherum smart contracts with docker.

## Steps

   - compilation of contract

     ```
      docker run --rm -v ${PWD}:/solidity ethereum/solc:stable --optimize --bin --abi --hashes -o /solidity/build --overwrite /solidity/contract.sol
     ```


  - run test rpc

    ```
      docker run -d -p 8545:8545 harshjv/testrpc
    ```

    ```
    docker run -v ${PWD}:/sol mzupzup/soliditybuilder
    ```

    ```

    docker run  ${PWD}:/sol mzupzup/soliditywatcher
    ```