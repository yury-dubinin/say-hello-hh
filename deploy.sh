# !/bin/bash
echo "Deploy contract to $1"
npx hardhat compile
npx hardhat run scripts/deploy.js --network $1