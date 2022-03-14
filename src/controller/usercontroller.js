
const express = require("express");
const User = require("../model/usermodel");

const route = express.Router();


route.get("", async (req, res) => {
    try {
        let user = await User.find().lean().exec();
        return res.send(user);

    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.post("", async (req, res) => {
    try {

        let user = await User.create(req.body);
        return res.send(user);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
route.get("/:id", async (req, res) => {
    try {

        let user = await User.findById(req.params.id).lean().exec();

        return res.send(user);
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})
module.exports = route