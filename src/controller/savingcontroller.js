
const express = require("express");
const Saving = require("../model/savingaccountmodel");
const Master = require("../model/masteraccount_model");
const Fixed = require("../model/fixedaccountmodel");
const route = express.Router();


route.get("", async (req, res) => {
    try {
        let saving = await Saving.find().lean().exec();
        return res.send(saving);

    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.post("", async (req, res) => {
    try {



        let saving = await Saving.create(req.body);
        //  creating saving account balance from req.body
        //  want to update master account so, 

        //  find master account and update: saving balance + fixed balance


        let master_id = saving.master_id;



        //  creating saving account balance from req.body
        //  want to update master account so, 

        //  find master account and update: saving balance + fixed balance

        // if no saving account for this user just add fixed account value only

        let fixed = await Fixed.findOne(master_id).lean().exec() || [];
        console.log(fixed, "fixed")


        let masterupdate = await Master.findById(master_id).lean().exec();

        if (fixed.balance == undefined) {
            console.log("undefined")
            fixed.balance = 0;
        }
        masterupdate.balance = saving.balance + fixed.balance;
        console.log(masterupdate, "masterupdate")
        let master = await Master.findByIdAndUpdate(master_id, masterupdate, { new: true }).lean().exec();



        return res.send(saving);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.get("/:id", async (req, res) => {
    try {

        let saving = await Saving.findById(req.params.id).lean().exec();

        return res.send(saving);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
module.exports = route