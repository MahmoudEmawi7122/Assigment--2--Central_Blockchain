let hash = require('object-hash');
const targetHash = 1562;
let validator = require("./validator")
let mongoose = require("mongoose");
let blockChainModel = mongoose.model("BlockChain");
let chalk = require("chalk");
class BlockChain{
    constructor(){
        this.chain = [];
        this.curr_transaction = [];
    }

    addNewBlock(PreviousHash){
        let block ={
            index: this.chain.length +1,
            timestamp: Date.now(),
            transaction: this.curr_transaction,
            hash: null,
            PreviousHash: PreviousHash,
        };

        if(validator.proofOfWork() == targetHash){
            block.hash = hash(block);
            let newBlock = new blockChainModel(this.block);
            newBlock.save( (errorMasg) =>{
                if(err) return console.log(chalk.red("Invalid can't save in Database" , errorMasg.message));
                console.log(chalk.green("The block is saved"));
            })
        }
        this.hash = hash(block);
        this.chain.push(block);
   }
   addNewTransaction(sender, recipient, amount){
      this.curr_transaction.push({ sender,recipient, amount});
   }
   lastBlock(){
       return this.chain.slice(-1)[0];
   }
   isEmpty(){
       return this.chain.length == 0;
   }
}
module.exports = BlockChain;
