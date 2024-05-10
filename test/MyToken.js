const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("MyTokenA", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.

    async function deployMyTokenFixture() {
      const premint = 5;
      const [owner, otherAccount] = await ethers.getSigners();

      const MyToken = await ethers.getContractFactory("MyToken");
      const myToken = await MyToken.deploy(premint);
    
      return { myToken, premint, owner };
    }
    describe("Deployment", function(){
        it("Should premint", async function(){
            const{myToken, premint, owner} = await loadFixture(deployMyTokenFixture);
            expect(await myToken.balanceOf(owner)).to.equal(premint);
        })
    }) 
})