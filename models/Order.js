const mongoose = require("mongoose");
const validator = require("validator");


const orderSchema = new mongoose.Schema({
    //testing
    additions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addition",
    }],
    car_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Car",
    },
    color_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Color",
    },
    customer_name:{
        type: String,
        trim: true,
        required: true,
    },
    customer_phone:{
        type: String,
        required: true,
        trim: true,
       /* validate(value){
            if(!isNumeric(value)) throw new Error("Validation error");
        }*/
    },
    date:{
        type: Date,
        default: Date.now
    },
    cost:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0) throw new Error('Validation error');
        },
    }
});


orderSchema.pre('save', async function (next) {
    const order = this

    if(!order.car_id.cost) throw new Error();
    if(!order.color_id.cost) throw new Error();
    
    order.cost +=order.car_id.cost;
    order.cost +=order.color_id.cost;

    order.additions.forEach((addition)=>{
        order.cost += addition.cost;
    })

    next()
})


const Order= mongoose.model("Order", orderSchema);
module.exports = Order;