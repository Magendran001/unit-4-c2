
const express = require("express");
const { modelName } = require("../model/usermodel");

const route = express.Router();


route.get("", async (req, res) => {
    try {
        let x = await model.find().lean().exec();
        return res.send(x);

    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.post("", async (req, res) => {
    try {

        let x = await model.create(req.body);
        return res.send(x);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.get("/:id", async (req, res) => {
    try {

        let x = await model.findById(req.params.id).lean().exec();

        return res.send(x);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
module.exports = route