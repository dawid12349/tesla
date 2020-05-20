const express = require("express"), app=express(),port = process.env.PORT || 3000;
const bodyParser = require("body-parser");const path = require("path");
const mw = require("../middleware/mw"); const seeds = require("../db/seeds/createcars");
const Car = require("../models/Car");
const Color = require("../models/Color");
const Addition = require("../models/Addition");
const Order = require("../models/Order");
require("../db/mongoose.js");

app.use(express.static(path.join(__dirname, "../Public/")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*seeds.createCars(); seeds.createColors();
seeds.createAdditions();*/
app.get("/", mw.maintance ,(req,res)=>{
    res.send("HOME PAGE");
});

app.get("/main", async (req, res)=>{
    try{
        const car = await Car.find({});
        if(car.length == 0) return res.status(400).send({"error": "cars not Found"});
        return res.status(200).send(car);
    }catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
});


//fetch single car
app.get("/main/:name", async (req,res)=>{
    try{
        singleCar = await Car.findOne({name: req.params.name})
        if(!singleCar) return res.status(400).send({"error": "Car Not Found"});
        return res.status(200).send(singleCar);
    } catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
})

app.get("/main/:name/configure", async (req,res)=>{
    try{
        carName = req.params.name;
        colors = await Color.find({}).select("name -_id");

        car_id= await Car.findOne({name: req.params.name}, '_id');
        additions = await Addition.find({ owners: {$all: [car_id]} }).select('-owners');
        res.status(200).send({carName, colors, additions});
    }catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
})
app.post("/main/:name/configure", async (req,res)=>{
    try{
        const order = new Order(req.body); 
        await order.populate("car_id color_id additions ", "cost").execPopulate();
        console.log(order);
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
        .populate('car_id', "name -_id")
        .select("_id customer_name date cost");
    
        console.log(orders);
        return res.status(200).send(orders);
    }catch(error){
         res.status(400).send({"error": "Something went wrong"});
    }
});

//single order config
app.get("/orders/:id", async(req,res)=>{
    try{
        const order = await Order.findById(req.params.id)
        .populate("car_id color_id additions", "name")
        return res.status(200).send(order);
    }catch(error){
         res.status(400).send({"error": "Something went wrong"});
    }
});


app.patch("/orders/:id/config", async(req,res)=>{
    const updates = Object.keys(req.body)
    //need change validation
    try {
        const order = await Order.findById(req.params.id)
        .populate("car_id color_id", "name")

        updates.forEach((update) => order[update] = req.body[update])
        await order.save()

        if (!order) {
            return res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(400).send(e)
    }
});


app.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)

        if (!order) {
            res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(500).send()
    }
})


//tutaj DELETE i (PUT/PATCH)

//test
app.get("/color", async (req,res)=>{
    try{
        const colors = await Color.find({});
        if(colors.length == 0) return res.status(400).send({"error": "Colors not Found"});
        return res.status(200).send(colors);
    } catch(error){
        res.status(400).send({"error": "Something went wrong"});
    }
});

//test routes

// app.post("/main", async (req,res)=>{
//     try{
//         const car = new Car(req.body); 
//         await car.save()
//         return res.status(200).send(car);
//     } catch(error){
//         res.status(400).send();
//     }
// });
 
// app.post("/dodatek", async (req,res)=>{
//     try{
//         const addition = new Addition(req.body); 
//         await addition.save()
//         return res.status(200).send(addition);
//     } catch(error){
//         res.status(400).send();
//     }
// })

// app.post("/color", async (req,res)=>{
//     try{
//         const color = new Color(req.body); 
//         await color.save()
//         return res.status(200).send(color);
//     } catch(error){
//         res.status(400).send();
//     }
// });



//not important
app.get("*", (req,res)=>{
    res.status(404).send("Page Not Found 404!");
})
app.listen(port, ()=>{
    console.log("server is running on port 3000");
})

