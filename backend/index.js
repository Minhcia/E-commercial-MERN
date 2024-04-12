const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart")





mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("DB is ok")
        })
        .catch((err)=>{

});

app.use(express.json());
app.use(cors());


// ROUTER

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("api/orders", orderRoute);
app.use("api/cart", cartRoute);





app.listen(process.env.PORT || 5000, ()=> {
        console.log('backend is ok')
})