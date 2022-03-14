const express = require("express");
const { connect } = require("./confg/db");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

const branchcontroller = require("./controller/branchcontroller");
const fixedcontroller = require("./controller/fixedcontroller");
const mastercontroller = require("./controller/mastercontroller");
const savingcontroller = require("./controller/savingcontroller");
const usercontroller = require("./controller/usercontroller");


app.use("/user", usercontroller)
app.use("/branch", branchcontroller)
app.use("/saving", savingcontroller)
app.use("/master", mastercontroller)
app.use("/fixed", fixedcontroller)


app.listen(4982, async (Req, res) => {
    try {
        console.log("connecting 4982 port");
        await connect
    }
    catch (e) {
        return res.send(e.message)
    }
})
