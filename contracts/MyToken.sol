// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MyToken is ERC20{
    constructor(uint preMint)ERC20("MyToken","MTK"){
        _mint(msg.sender,preMint);
    }
}