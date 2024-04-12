const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userID: {type: String, require: true, unique: true},
        product: [
            {
                productID: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1
                }

            }
        ],
        amount: {type: Number, require: true},
        address: {type: String, require: true},
        status: {type: String, default: "Pending"}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Order", OrderSchema);