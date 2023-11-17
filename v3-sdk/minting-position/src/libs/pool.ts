import { ethers } from 'ethers'
import { CurrentConfig } from '../config'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import { POOL_FACTORY_CONTRACT_ADDRESS } from './constants'
import { getProvider } from './providers'
import { computePoolAddress } from '@uniswap/v3-sdk'

interface PoolInfo {
    token0: string
    token1: string
    fee: number
    tickSpacing: number
    sqrtPriceX96: ethers.BigNumber
    liquidity: ethers.BigNumber
    tick: number
}

export async function getPoolInfo(): Promise<PoolInfo> {
    const provider = getProvider()
    if (!provider) {
        throw new Error('No provider')
    }
    console.log('contract factory', POOL_FACTORY_CONTRACT_ADDRESS)
    console.log('token 0', CurrentConfig.tokens.token0)
    console.log('token 1', CurrentConfig.tokens.token1)
    console.log('token fee', CurrentConfig.tokens.poolFee.toString())
    let currentPoolAddress = computePoolAddress({
        factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
        tokenA: CurrentConfig.tokens.token0,
        tokenB: CurrentConfig.tokens.token1,
        fee: CurrentConfig.tokens.poolFee,
        initCodeHashManualOverride: '0x1ff84277f6e4ba15bb260aa9ab3028dd2abe06f3020ecdc09de30d4b18133df4'
    })
    currentPoolAddress = '0xB1A4Af30427948c199827F475f07336336f71BE2'
    console.log(currentPoolAddress)
    const poolContract = new ethers.Contract(
        currentPoolAddress,
        IUniswapV3PoolABI.abi,
        provider
    )
    const test1 = await poolContract.token0()
    console.log("🚀 ~ file: pool.ts:38 ~ getPoolInfo ~ test1:", test1)
    const test2 = await poolContract.token1()
    console.log("🚀 ~ file: pool.ts:40 ~ getPoolInfo ~ test2:", test2)

    const test3 = await poolContract.fee()
    console.log("🚀 ~ file: pool.ts:43 ~ getPoolInfo ~ test3:", test3)

    const test4 = await poolContract.tickSpacing()
    console.log("🚀 ~ file: pool.ts:46 ~ getPoolInfo ~ test4:", test4)

    const test5 = await poolContract.liquidity()
    console.log("🚀 ~ file: pool.ts:49 ~ getPoolInfo ~ test5:", test5)

    const test6 = await poolContract.slot0()
    console.log("🚀 ~ file: pool.ts:52 ~ getPoolInfo ~ test6:", test6)

    const [token0, token1, fee, tickSpacing, liquidity, slot0] =
        await Promise.all([
            poolContract.token0(),
            poolContract.token1(),
            poolContract.fee(),
            poolContract.tickSpacing(),
            poolContract.liquidity(),
            poolContract.slot0(),
        ])
    console.log({
        token0,
        token1,
        fee,
        tickSpacing,
        liquidity,
        sqrtPriceX96: slot0[0],
        tick: slot0[1],
    })
    return {
        token0,
        token1,
        fee,
        tickSpacing,
        liquidity,
        sqrtPriceX96: slot0[0],
        tick: slot0[1],
    }
}
