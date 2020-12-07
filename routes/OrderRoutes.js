const orderController=require("../controllers/OrderController");
const express=require("express");
const router=express.Router();
router.get('/getOrders',orderController.getOrders);
router.post('/createOrders',orderController.createOrders);

module.exports=router;
