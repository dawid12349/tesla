const mongoose = require("mongoose");
const validator = require("validator");


const additionSchema = new mongoose.Schema({
    name: {
        type: String,
      const mongoose = require("mongoose");
const validator = require("validator");


const additionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
        validate(value){
            if(value<0) throw new Error('Cost must be postive!');
        }
    },
    description: {
        type: String, 
        default: "sample text",
    },
    owners:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
    }],
    type:{
        type: String,
        required: true,
    }

});


const Addition = mongoose.model("Addition", additionSchema);
module.exports = Addition;
