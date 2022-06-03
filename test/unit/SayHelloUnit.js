const { expect } = require('chai')

describe('Say Hello contract testing', function (){
    before(async function (){
        SayHelloContract = await ethers.getContractFactory('SayHello');
        sayHelloContract = await SayHelloContract.deploy('Hello World!');
        await sayHelloContract.deployed();
    })

    it('should return text', async function () {
        expect(await sayHelloContract.message()).to.equal('Hello World!');
    });
})
