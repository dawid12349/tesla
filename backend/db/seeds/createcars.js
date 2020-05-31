var mongoose = require("mongoose");
var Color  = require("../../models/Color");
var Car = require("../../models/Car");
var Addition  = require("../../models/Addition");

var colorSeeds = [
    {
        name: "Black",
        hex: "#000000",
    },
    var mongoose = require("mongoose");
var Color  = require("../../models/Color");
var Car = require("../../models/Car");
var Addition  = require("../../models/Addition");

var colorSeeds = [
    {
        name: "Black",
        hex: "#000000",
    },
    {
        name: "Deep Blue",
        hex: "#00008B",
    },
    {
        name: "Midnight Silver",
        hex: "#68707C",
    },
    {
        name: "Red Multi-Coat",
        hex: "#a62c2b",
    },
    {
        name: "orange",
        hex: "#FF4500",
    }
];
var carSeeds = [
    {  
        _id: mongoose.Types.ObjectId("5ec2dac22ddcf74bc4b7889f"),
        name: "Model X",
        cost: 77700,
        description: "Range: 507km VV Top speed: 250km/h VV 0-100km/h: 4,6s"
    },
    {
        _id: mongoose.Types.ObjectId("5ec2dac22ddcf74bc4b788a2"),
        name: "Model S",
        cost: 72600,
        description: "Range: 610km VV Top speed: VV 250km/h VV 0-100km/h: 3,8s"
    },
    {
        _id: mongoose.Types.ObjectId("5ec2dac22ddcf74bc4b788a5"),
        name: "Model 3",
        cost: 39500,
        description: "Range: 409km Top VV speed: 225km/h VV 0-100km/h: 5,6s"
    },{
        _id: mongoose.Types.ObjectId("5ec2dac22ddcf74bc4b788a9"),
        name: "Model Y",
        cost: 39500,
        description: "Range: 505km VV Top speed: VV 225km/h VV 0-100km/h: 5,6s"
    }
];
var additions = [
    {
        name: 'Silver wheels',
        cost: 0,
        owners: [
            "5ec2dac22ddcf74bc4b7889f",
            "5ec2dac22ddcf74bc4b788a2"
        ],
        type: "felgi",
    },
    {
        name: '19" Sport wheels',
        cost: 1300,
        owners: [
            "5ec2dac22ddcf74bc4b788a5",
        ],
        type: "felgi",
    },
    {
        name: "przyciemmnione szyby",
        cost: 1500,
        owners: [
            "5ec2dac22ddcf74bc4b7889f",
            "5ec2dac22ddcf74bc4b788a2",
            "5ec2dac22ddcf74bc4b788a5",
            "5ec2dac22ddcf74bc4b788a9"
        ],
        type: "szyby"
    },
    {
        name: "Long range",
        cost: 8700,
        owners: [
            "5ec2dac22ddcf74bc4b788a5",
        ],
        type: "wersja"
    },
    {
        name: "Performance",
        cost: 13400,
        owners: [
            "5ec2dac22ddcf74bc4b788a5",
            "5ec2dac22ddcf74bc4b788a2",
            "5ec2dac22ddcf74bc4b7889f",
        ],
        type: "wersja"
    },
    {
        name: "Sonic Carbon Slipstream Wheels",
        cost: 1300,
        owners: [
            "5ec2dac22ddcf74bc4b788a2",
        ],
        type: "felgi"
    },
    {
        name: "Sonic Carbon Twin Turbine Wheels",
        cost: 4000,
        owners: [
            "5ec2dac22ddcf74bc4b788a2",
        ],
        type: "felgi"
    },
    {
        name: "Two Tone Sliperstream",
        cost: 1800,
        owners: [
            "5ec2dac22ddcf74bc4b7889f"
        ],
        type: "felgi"
    },
    {
        name: "Onyx Black Wheels",
        cost: 4800,
        owners: [
            "5ec2dac22ddcf74bc4b7889f"
        ],
        type: "felgi"
    },
    {
        name: "six seat interior",
        cost: 5700,
        owners: [
            "5ec2dac22ddcf74bc4b7889f"
        ],
        type: "siedzenia"
    },
    {
        name: "seven seat interior",
        cost: 3100,
        owners: [
            "5ec2dac22ddcf74bc4b7889f"
        ],
        type: "siedzenia"
    },
    {
        name: "Black and White Carbon Fiber",
        cost: 1300,
        owners: [
            "5ec2dac22ddcf74bc4b788a5",
            "5ec2dac22ddcf74bc4b788a2",
            "5ec2dac22ddcf74bc4b7889f",
        ],
        type: "siedzenia"
    },
    {
        name: "Cream Oak Wood",
        cost: 1300,
        owners: [
            "5ec2dac22ddcf74bc4b788a5",
            "5ec2dac22ddcf74bc4b788a2",
            "5ec2dac22ddcf74bc4b7889f",
        ],
        type: "siedzenia"
    },
    {
        name: "Autopilot",
        cost: 5300,
        owners: [
            "5ec2dac22ddcf74bc4b788a5",
            "5ec2dac22ddcf74bc4b788a2",
            "5ec2dac22ddcf74bc4b7889f",
            "5ec2dac22ddcf74bc4b788a9"
        ],
        type: "other"
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