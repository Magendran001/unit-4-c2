
const express = require("express");
const Branch = require("../model/branchmodel");

const route = express.Router();


route.get("", async (req, res) => {
    try {
        let branch = await Branch.find().lean().exec();
        return res.send(branch);

    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.post("", async (req, res) => {
    try {
        console.log("branch")

        let branch = await Branch.create(req.body);
        return res.send(branch);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.get("/:id", async (req, res) => {
    try {

        let branch = await Branch.findById(req.params.id).lean().exec();

        return res.send(branch);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
module.exports = route