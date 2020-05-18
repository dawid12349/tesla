const mongoose = require("mongoose");
const validator = require("validator");


const order_additionSchema = new mongoose.Schema({
    /*order_id: {
        type: objectId,
    },*/
    addition_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Addition"
    }
});


const Order_addition = mongoose.model("Order_addition", order_additionSchema);
module.exports = Order_addition;