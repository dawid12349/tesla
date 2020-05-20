const mongoose = require("mongoose");
const validtor = require("validator");

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    cost: {
        type: Number,
        required: true,
        validate(value){
            if(value<0) throw new Error('Validation error');
        }
    },
    description:{
        type: String,
        default: "Sample text",
    },
    picture: {
        type: String,
        default: "https://cdn.iconscout.com/icon/free/png-256/page-not-found-5-530376.png"
    },
    icon:{
        type: String,
        default: "https://cdn.iconscout.com/icon/free/png-256/page-not-found-5-530376.png"
    },

});


const Car = mongoose.model("Car", carSchema);
module.exports = Car;
