const mongoose = require("mongoose");
const validator = require("validator");


const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    hex: {
        type: String,
        required: true,
        unique: true,
    },
    cost: {
        type: Number,
        required: true,
        validate(value){
            if(value<0) throw new Error();
        },
    }
});


const Color = mongoose.model("Color", colorSchema);
module.exports = Color;
