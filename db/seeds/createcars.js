var mongoose = require("mongoose");
var Color  = require("../../models/Color");
var Car = require("../../models/Car");

var colorSeeds = [
    {
        name: "magenta",
        hex: "#FF00FF",
    },
    {
        name: "purple",
        hex: "#800080",
    },
    {
        name: "darkmagenta",
        hex: "#8B008B",
    }
];
var carSeeds = [
    {
        name: "teslaCar1",
        cost: 5000,
        description: "Reprehenderit mollit eiusmod sunt officia minim enim mollit"
    },
    {
        name: "teslaCar2",
        cost: 5000,
        description: "Reprehenderit mollit eiusmod sunt officia minim enim mollit"
    },
    {
        name: "teslaCar3",
        cost: 5000,
        description: "Reprehenderit mollit eiusmod sunt officia minim enim mollit"
    }
];

async function createColors(){
    try {
        await Color.deleteMany({});
        console.log('Colors removed');
        for(const color of colorSeeds) {
            let mongoColor = await new Color(color);
            await mongoColor.save();
            console.log('Color added to db');
        }
    } catch(err) {
        console.log(err);
    }
}

async function createCars(){
    try {
        await Car.deleteMany({});
        console.log('Cars removed');
        for(const car of carSeeds) {
            let mongoCar = await new Car(car);
            await mongoCar.save();
            console.log('Car added to db');
        }
    } catch(err) {
        console.log(err);
    }
}


module.exports = {createColors, createCars};