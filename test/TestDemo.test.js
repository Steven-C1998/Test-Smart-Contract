const TestDemo = artifacts.require("TestDemo");

contract("TestDemo" , (accounts) => {

    before(async () => {
        testDemo = await TestDemo.deployed()
        console.log("TestDemo Address: ", testDemo)
    })
    
    it("gives the owner of the token 1M tokens", async () => {
        let balance = await testDemo.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000000, "Balance should be 1M token for contract creator")
    })

    it("can transfer tokens between accounts", async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await testDemo.transfer(accounts[1], amount, {from: accounts[0]})
        let balance = await testDemo.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000, "Balance should be 1K token for contract creator")
    })

    it("can mint new coins", async () => {
        let amount = web3.utils.toWei('1000', 'ether')
        await testDemo.mint(accounts[0], amount)
        let balance = await testDemo.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000000, "Balance should be 1000000")
    })

    it ("can burn coins", async () =>{
        let amount = web3.utils.toWei('1000', 'ether')
        await testDemo.burn(amount)
        let balance = await testDemo.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 999000, "Balance should be 999000")
    })
})