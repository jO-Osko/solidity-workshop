import '@nomiclabs/hardhat-truffle5'
import '@typechain/hardhat'
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import '@typechain/hardhat'
import "dotenv/config";

import { HardhatUserConfig } from 'hardhat/types'


const { API_URL, PRIVATE_KEY, ETHERSCAN_API_URL } = process.env;


const config : HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${API_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    coston: {
      url: "https://coston-api.flare.network/ext/bc/C/rpc",
      accounts: [`${PRIVATE_KEY}`],
      chainId: 16
    },
    coston2: {
      url: "https://coston2-api.flare.network/ext/C/rpc",
      accounts: [`${PRIVATE_KEY}`],
      chainId: 114
    },
    songbird: {
      url: "https://songbird-api.flare.network/ext/bc/C/rpc",
      accounts: [`${PRIVATE_KEY}`],
      chainId: 19
    }
  },
  etherscan: {
    apiKey: {
      "goerli": `${ETHERSCAN_API_URL}`,
      "coston": "ABC"
    },
    customChains: [
      {
        network: "coston",
        chainId: 16,
        urls: {
          // faucet: https://faucet.towolabs.com/
          apiURL: "https://coston-explorer.flare.network/api", // Must not have / endpoint
          browserURL: "https://coston-explorer.flare.network"
        }
      },
      {
        network: "coston2",
        chainId: 114,
        urls: {
          // faucet: https://coston2-faucet.towolabs.com/
          apiURL: "https://coston2-explorer.flare.network/api", // Must not have / endpoint
          browserURL: "https://coston2-explorer.flare.network"
        }
      },
      {
        network: "songbird",
        chainId: 19,
        urls: {
          apiURL: "https://songbird-explorer.flare.network/api", // Must not have / endpoint
          browserURL: "https://songbird-explorer.flare.network/"
        }
      }
    ]
  },
  typechain: {
    target: 'truffle-v5',
  },
};

export default config;
