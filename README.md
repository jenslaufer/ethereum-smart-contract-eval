# Evaluation with Ethereum Smart Contracts 


This little Project contains a simple smart contracts. The project is about understanding the livecycle of development of etherum smart contracts with docker.

## Steps

   - Start development
      ```
       docker run -d --name truffle -p 3000-3001:3000-3001 -p 8545:8545 -v ${pwd}:/app lead4good/truffle
      ```

   - Interactive mode
   ```
   docker exec -it truffle sh
   ```