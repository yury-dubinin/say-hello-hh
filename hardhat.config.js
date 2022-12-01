/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/adaaa49f3d3e47f3a4590ec22e55a9be',
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}