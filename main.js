let database = require("./database");
database.onConnect(() =>{
let BlockChain = require("./BlockChain");
let blockchain = new BlockChain();
let hash = require('object-hash');
let PROOF = 156;

if(proofOfWork() == PROOF){
    blockchain.addNewTransaction("Mahmoud","Emawi",120);
    let previousHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(previousHash);
}
console.log("BlockChain : " , blockchain.chain);
});