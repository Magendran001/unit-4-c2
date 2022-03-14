
const { default: mongoose } = require("mongoose");

const fixedschema = new mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },

    interestRate: { type: Number, required: true },
    balance: { type: Number, required: true },
    maturityDate: { type: String, required: true },
    startDate: { type: String, required: true, },

    master_id: { type: mongoose.Schema.Types.ObjectId, ref: "master", required: true }


},
    {
        timestamps: true,
    });
module.exports = mongoose.model("fixed", fixedschema)


