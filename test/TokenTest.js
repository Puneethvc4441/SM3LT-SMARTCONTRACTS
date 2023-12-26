const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SM3LT contract", function () {
    
    beforeEach(async function () {
        SM3LT = await ethers.getContractFactory("SmltToken");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        sm3lt = await SM3LT.deploy(owner.address);
    });
/*
    describe("Name", function () {
        it("Should return the correct name", async function(){
            expect(await sm3lt.name()).to.equal("SM3LT");
        });
    });


    describe("symbol", function () {
        it("Should return the correct symbol", async function () {
            expect(await sm3lt.symbol()).to.equal("SMLT");
            });
          });

    describe("ownerAccount", function(){
        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await sm3lt.balanceOf(owner.address);
            expect(await sm3lt.totalSupply()).to.equal(ownerBalance);
        }); 
    })
});
    describe("totalSupply", function () {
        it("Should return the correct total supply", async function () {
        const initialSupply = await sm3lt.totalSupply();
        expect(await sm3lt.totalSupply()).to.equal(initialSupply);
        });
    });

    describe("balanceOf", function () {
        it("Should return the correct balance for owner", async function () {
        const ownerBalance = await sm3lt.balanceOf(owner.address);
        expect(ownerBalance).to.equal(0); // Assuming owner starts with 0 balance
    });

    describe("mint", function(){
        it("Should return the correct balance for addr1 after minting", async function () {
        await sm3lt.connect(owner).mint(addr1.address, 100);
        const addr1Balance = await sm3lt.balanceOf(addr1.address);
        expect(addr1Balance).to.equal(100);
        });
  });

*/
describe("Minting", function () {
    it("Should mint new tokens and allocate them to the specified account", async function () {
      const amountToMint = 100;
      await sm3lt.connect(owner).mint(addr1.address, amountToMint);

      const addr1Balance = await sm3lt.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(amountToMint);
    });
  });
});

  describe("Transferring Tokens", function () {
    beforeEach(async function () {
      // Mint some tokens to the owner before each test
      await sm3lt.connect(owner).mint(owner.address, 1000);
    });

    it("Should transfer tokens from owner to another account", async function () {
      const transferAmount = 100;
      await sm3lt.connect(owner).transfer(addr2.address, transferAmount);

      const addr1Balance = await sm3lt.balanceOf(addr2.address);
      expect(addr1Balance).to.equal(transferAmount);
    });
  });

