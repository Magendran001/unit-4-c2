
const express = require("express");
const Master = require("../model/masteraccount_model");

const route = express.Router();


route.get("", async (req, res) => {
    try {
        let master = await Master.find().populate("user_id").populate("branch_id").lean().exec();
        return res.send(master);

    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.post("", async (req, res) => {
    try {

        let master = await Master.create(req.body);
        return res.send(master);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.get("/:id", async (req, res) => {
    try {

        let master = await Master.findById(req.params.id).select([""]).lean().exec();

        return res.send(master);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
module.exports = route