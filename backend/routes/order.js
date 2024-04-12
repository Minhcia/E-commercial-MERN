const Order = require("../models/Order");
const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");



// CREATE ORDER

router.post("/", verifyToken, async (req,res)=>{
    const newOrder = new Order(req.body);

    try{
         const savedOrder = await newOrder.save();
         res.status(201).json(savedOrder);

    }catch (err){res.status(503).json(err)}

} );


// UPDATE ORDER   

router.put("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try {
        const updatedOrder = await Product.findByIdAndUpdate(req.params.id, 
            {
            $set: req.body
        },
            {new:true
        }
        )
        res.status(200).json(updatedOrder);
        
    } catch (err) {
        res.status(500).json(err)
    }
});

// DELETE ORDER 

router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted");
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET USER ORDER

router.get("/find/:userId", verifyTokenAndAuthorization, async(req,res)=>{
    try {
        const Orderdetail = await Order.findOne({userID: req.params.userId})
        res.status(200).json(Orderdetail);
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL ORDERS

router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try {
        const orders =  await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
