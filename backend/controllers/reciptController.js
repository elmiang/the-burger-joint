const Recipt = require('../models/reciptModel')
const mongoose = require ('mongoose')

// get all recipts
const getRecipts = async (req, res) => {
    const recipts = await Recipt.find({}).sort({createdAt: -1})
    res.status(200).json(recipts)
}

// get a recipt
const getRecipt = async (req, res) => {
    const {id} = req.params

    /*if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such recipt'})
    }*/

    const recipt = await Recipt.find({User_ID: id}).sort({createdAt: -1})

    if (!recipt) {
        return res.status(404).json({error: 'no such recipt'})
    }

    res.status(200).json(recipt)
}

// Create a new recipt
const createRecipt = async (req, res) => {
    const {User_ID, Payment_Type, Card_No, Card_Exp, Card_CSV, Address_One, Address_Two, Address_City, Address_Country, Contact_FName, Contact_SName, Contact_Email, Contact_Phone} = req.body

    try {
        const recipt = await Recipt.create({User_ID, Payment_Type, Card_No, Card_Exp, Card_CSV, Address_One, Address_Two, Address_City, Address_Country, Contact_FName, Contact_SName, Contact_Email, Contact_Phone})
        res.status(200).json(recipt)
    }
    catch (error){
        res.status(400).json({error: error.mssg})
    }
}

module.exports = {
    getRecipts,
    getRecipt,
    createRecipt
}