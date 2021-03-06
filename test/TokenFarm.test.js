const { assert } = require('chai')
const { contracts_build_directory } = require('../truffle-config')

const DaiToken = artifacts.require('DaiToken')
const DappToken = artifacts.require("DappToken")
const TokenFarm = artifacts.require('TokenFarm')

require('chai')
   .use(require('chai-as-promised'))
   .should()
   

contract('TokenFarm',(accounts)=>{
    let daiToken , dappToken, tokenFarm

before(async()=>{
    //load contracts
    daiToken = await DaiToken.new()
    dappToken = await DappToken.new()
    tokenFarm = await  TokenFarm.new(dappToken.address, daiToken.address)
    await dappToken.transfer('1000000000000000000000000')
})



    describe('Mock DAI deployment', async() =>{
        it('has a name', async() =>{
            
            const name = await daiToken.name()
            assert.equal(name,'Mock DAI Token')
        })
    })
})   