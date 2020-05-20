var mongoose = require("mongoose");
var Color  = require("../../models/Color");
var Car = require("../../models/Car");
var Addition  = require("../../models/Addition");

var colorSeeds = [
    {
        name: "Black",
        hex: "#000000",
        cost: 1200,
    },
    {
        name: "Deep Blue",
        hex: "#00008B",
        cost: 1200,
    },
    {
        name: "Midnight Silver",
        hex: "#68707C",
        cost: 1200,
    },
    {
        name: "Red Multi-Coat",
        hex: "#a62c2b",
        cost: 2200,
    },
    {
        name: "orange",
        hex: "#FF4500",
        cost: 2500,
    }
];
var carSeeds = [
    {
        name: "ModelX",
        cost: 77700,
        description: "Range: 507km Top speed: 250km/h 0-100km/h:4,6s"
    },
    {
        name: "ModelS",
        cost: 72600,
        description: "Range: 610km Top speed: 250km/h 0-100km/h: 3,8s"
    },
    {
        name: "Model3",
        cost: 39500,
        description: "Range: 409km Top speed: 225km/h 0-100km/h: 5,6s"
    }
];
var additions = [
    {
        name: "felgi",
        cost: 50,
        description: "super felgi",
        owners: [
            "5eb8706156fc5c20c842f232",
        ]
    },
    {
        name: "wysuwane lustra",
        cost: 500,
        description: "super lustra",
        owners: [
            "5eb8706156fc5c20c842f22e",
            "5eb8706156fc5c20c842f230",
        ]
    },
    {
        name: "przyciemmnione szyby",
        cost: 5000,
        description: "super szyby",
        owners: [
            "5eb8706156fc5c20c842f22e",
            "5eb8706156fc5c20c842f232",
        ]
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

async function createAdditions(){
    try {
        await Addition.deleteMany({});
        console.log('additions removed');
        for(const addition of additions) {
            let  mongoAddition = await new Addition(addition);
            await mongoAddition.save();
            console.log('addition added to db');
        }
    } catch(err) {
        console.log(err);
    }
}


module.exports = {createColors, createCars, createAdditions};