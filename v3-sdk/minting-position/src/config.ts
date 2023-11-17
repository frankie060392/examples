import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { DAI_TOKEN, USDC_TOKEN } from './libs/constants'

// Sets if the example should run locally or on chain
export enum Environment {
  LOCAL,
  WALLET_EXTENSION,
  MAINNET,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
  }
  wallet: {
    address: string
    privateKey: string
  }
  tokens: {
    token0: Token
    token0Amount: number
    token1: Token
    token1Amount: number
    poolFee: FeeAmount
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'https://rpc-nebulas-testnet.uniultra.xyz',
    mainnet: 'https://rpc-nebulas-testnet.uniultra.xyz',
  },
  wallet: {
    address: '0xE4B8f63C111EF118587D30401e1Db99f4CfBD900',
    privateKey:
      '0x85fc659e3f7232c6310b34d99955e836dc11935df3a00951ccba66814133bb0e',
  },
  tokens: {
    token0: USDC_TOKEN,
    token0Amount: 10,
    token1: DAI_TOKEN,
    token1Amount: 10,
    poolFee: FeeAmount.MEDIUM,
  },
}

