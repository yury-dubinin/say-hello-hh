async function main() {
  const SayHello = await ethers.getContractFactory('GetterSetter')
  const testContract = await SayHello.deploy()
  const amount = ethers.BigNumber.from(1)
  const tx = await testContract.setUint256(amount)
  await tx.wait()
  const valueSet = await testContract.getUint256()
  let json = {
    contractAdrress: testContract.address,
    deploerAddress: tx.from,
    valueSet: valueSet.toNumber()
  }
  var fs = require('fs')
  fs.writeFileSync("result.json", JSON.stringify(json), 'utf8', function(err){
      if (err){
          return console.log(err)
      }
  })
  console.log('Contract Unit256:', json)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
