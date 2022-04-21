let mongoose = require("mongoose");
let schema = mongoose.Schema;
let BlockChainSchema = new schema({
    index:{
    required: true,
    type: Schema.Types.Number

    },
    timestamp:{
        required: true,
        type: Schema.Types.Date,
        default: Date.now()
    },
    transactions:{
    required: true,
    type: Schema.Types.Array
    },
    prevHash: {
        required: false,
        type: Schema.Types.String

    },
    hash: {
        required: true,
        type: Schema.Types.String

    }
});
module.exports = mongoose.module("BlockChain" , BlockChainSchema);
