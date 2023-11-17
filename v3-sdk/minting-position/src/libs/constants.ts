// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x277a70C6Dce30690b2e14E5385dFF3623c190Ae5'
export const NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS =
  '0xCf3116898252a20a60Da81d364FfEd207BAfF4d9'


// Currencies and Tokens
export const USDC_TOKEN = new Token(
    SupportedChainId.MAINNET,
    '0x4311b62565B1d943Fa11DB2272C1238Def010Fff',
    18,
    'USDC',
    'USD//C'
)

export const DAI_TOKEN = new Token(
    SupportedChainId.MAINNET,
    '0xaC50709156889efC5Cd594381aE8524a69719B1D',
    18,
    'DAI',
    'Dai Stablecoin'
)

// Transactions

export const MAX_FEE_PER_GAS = '100000000000'
export const MAX_PRIORITY_FEE_PER_GAS = '100000000000'
export const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = '100000000000000000000000000'

// ABI's

export const ERC20_ABI = [
    // Read-Only Functions
    'function balanceOf(address owner) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)',

    // Authenticated Functions
    'function transfer(address to, uint amount) returns (bool)',
    'function approve(address _spender, uint256 _value) returns (bool)',

    // Events
    'event Transfer(address indexed from, address indexed to, uint amount)',
]

export const NONFUNGIBLE_POSITION_MANAGER_ABI = [
    // Read-Only Functions
    'function balanceOf(address _owner) view returns (uint256)',
    'function tokenOfOwnerByIndex(address _owner, uint256 _index) view returns (uint256)',
    'function tokenURI(uint256 tokenId) view returns (string memory)',

    'function positions(uint256 tokenId) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)',
]
