
const express = require("express"), app=express();
const bodyParser = require("body-parser");const path = require("path");
const mw = require("../middleware/mw"); const seeds = require("../db/seeds/createcars");
const Car = require("../models/Car");
const Color = require("../models/Color");
const Addition = require("../models/Addition");
const Order = require("../models/Order");
require("../db/mongoose.js");

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(express.static(path.join(__dirname, "../Public/")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//seeds.createCars(); seeds.createColors();
//seeds.createAdditions();
app.get("/", mw.maintance ,(req,res)=>{
    res.send("HOME PAGE");
});

//cars
app.get("/cars", async (req, res)=>{
    try{
        const car = await Car.find({})
        if(car.length == 0) return res.status(400).send({"error": "cars not Found"});
        return res.status(200).send(car);
    }catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
});
app.get("/cars/:id", async (req,res)=>{
    try{
        singleCar = await Car.findOne({_id: req.params.id});
        if(!singleCar) return res.status(400).send({"error": "Car Not Found"});
        return res.status(200).send(singleCar);
    } catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
})

app.get("/cars/:id/configure", async (req,res)=>{
    try{
        colors = await Color.find({}).select("-hex");

        car_id=  await Car.findOne({_id: req.params.id})
        additions = await Addition.find({ owners: {$all: [car_id]} }).select("-owners");
        res.status(200).send({car_id, colors, additions});
    }catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
})


// new orders

app.post("/orders", async (req,res)=>{
    try{
        const order = new Order(req.body); 
        await order.populate("car_id color_id additions", "-owners").execPopulate();
        await order.save();
        return res.status(200).send(order);
    }catch(error){
         res.status(400).send({"error": "Something went wrong"});
    }
})

//all the orders
app.get("/orders", async(req,res)=>{
    try{
        const orders = await Order.find({})
        .populate('car_id additions color_id', "-owners");
    
        console.log(orders);
        return res.status(200).send(orders);
    }catch(error){
         res.status(400).send({"error": "Something went wrong"});
    }
});

//single order info
app.get("/orders/:id", async(req,res)=>{
    try{
        const order = await Order.findById(req.params.id).populate('car_id additions color_id', "-owners");
        return res.status(200).send(order);
    }catch(error){
         res.status(400).send({"error": "Something went wrong"});
    }
});

//patch
app.patch("/orders/:id", async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowed = ["name", "customer_phone", "customer_name", "customer_email", "additions", "car_id", "color_id"]
    const isValidOperation = updates.every((update) => allowed.includes(update));

    if(!isValidOperation) res.status(500).send({error: "Forbidden request"});
    try {
        const order = await Order.findById(req.params.id);
        await order.populate("car_id color_id additions ").execPopulate();
        updates.forEach((update) => order[update] = req.body[update])
        await order.populate("car_id color_id additions ").execPopulate();
        await order.save()

       if (!order) {
            return res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(400).send(e)
    }
});

//deleton
app.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)

        if (!order) {
            res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(500).send({"error": "something went wrong"});
    }
})

//see additions

app.get("/additions", async (req, res)=>{
    try{
        const Additions = await Addition.find({});
        return res.status(200).send(Additions);
    }catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
});

app.get("/additions/:id", async (req, res)=>{
    try{
        car_id = req.params.id;
        Additions = await Addition.find({ owners: {$all: [car_id]} });
        return res.status(200).send(Additions);
    }catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
});

//tutaj DELETE i (PUT/PATCH)



//not important
app.get("*", (req,res)=>{
    res.status(404).send("Page Not Found 404!");
})
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
