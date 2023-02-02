//Make sure to require your model so you can connect to the DB
const { Model } = require("mongoose");
const VikingModel = require("./models/User");

//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:

const NewViking = {
    firstName: "Bjørn",
    familyName: "Evensen",
    strenght: 100,
    weapon: "String",
};

const NewVikingArray = [
    {firstName: "Frode",
    familyName: "Bengtsson",
    strenght: 70,
    weapon: "Axe",
},
{firstName: "Halfdan",
    familyName: "Ellingboe",
    strenght: 30,
    weapon: "Broom",
},
{firstName: "Ødger",
    familyName: "Gunvaldsen",
    strenght: 200,
    weapon: "Mjölnir",
}
]

VikingModel.findByIdAndUpdate('63dba2408b29bb08a12cac2c', {firstName:"Odin", strenght: 1000}, {new: true})
.then ((updatedViking) => {
    console.log("updatedViking", updatedViking);
})
.catch((err) => {
    console.log("err", err);
})

/* VikingModel.insertMany(NewVikingArray)
.then((newVikingNDB) => {
    console.log("newVikingNDB", newVikingNDB);
})
.catch((err) => {
    console.log(err)
}) */

/* VikingModel.create(NewViking)
.then((newVikingNDB) => {
    console.log("New Viking Added", newVikingNDB);
})
.catch((err) => {
    console.log("Error adding newViking", err);
}) */

VikingModel.findByIdAndDelete ('63db9c9b27ecf785ccfa8f44')
.then((deletedViking) => {
    console.log("Deleted Viking", deletedViking);
})
.catch((err) => {
    console.log("Error deleting Viking", err);
})

