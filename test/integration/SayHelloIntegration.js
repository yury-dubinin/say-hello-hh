const { expect } = require('chai')

describe('Existing Say Hello contract Integration testing', function (){
    before(async function (){
        SayHelloContract = await ethers.getContractFactory('SayHello');
        sayHelloContract = await SayHelloContract.attach('0x0C3851BFf4cD0F978e77F694DDC8EBb922122888');
    })

    it('should return text', async function () {
        expect(await sayHelloContract.message()).to.equal('Hello World!');
    });
})
