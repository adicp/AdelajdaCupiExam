const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        minlength: [3, "There is no pirate with a 2 character long name, please insert a true pirate name"],
        required: [true, "Please enter a pirate name!"]
    },
    pirateImg: {
        type: String,
        minlength: [3, "it should start with http"],
        required: [true, "Plese enter a correct pirat image link"]
    },

    noOfTreasure: {
        type: Number,
        enum: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ],
        required :[true, "Please select the number of treasures"]     
    },

    catchPhrase: {
        type: String,
        maxlength: [100, "Please enter a proper catchPhrase"],
        required: true
    },    
    crewPosition: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"],
        enum: [
            "Captain",
            "First Mate",
            "Quarter Master",
            "Boatswain",
            "Poweder Monkey"
        ],
        required: [true, "Please Select the Pirate's crew position"]
    }
    ,
    pegLeg: {
        type: Boolean,
        required: true
    },

    eyePatch: {
        type: Boolean,
        required: true
    },

    hookHand: {
        type: Boolean,
        required: true
    }
            

}, {timestamps:true})

const Pirates = mongoose.model("Pirates", PirateSchema)

module.exports = Pirates;