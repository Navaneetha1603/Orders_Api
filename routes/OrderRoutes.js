const orderController=require("../controllers/OrderController");
const express=require("express");
const router=express.Router();
router.get('/getOrders',orderController.getOrders);
router.patch('/createOrders',orderController.createOrders);
router.get('/getOrder/:userId',orderController.getUserId);
router.get('/orderCount',orderController.counting);

module.exports=router;
