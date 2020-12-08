const orderController=require("../controllers/OrderController");
const express=require("express");
const router=express.Router();
router.get('/getOrders',orderController.getOrders);
router.post('/createOrders',orderController.createOrders);
router.get('/getOrder/:userId',orderController.getUserId);
router.get('/userCount',orderController.counting);
router.post('/orderDetails',orderController.createOrderDetails);
router.get('/orderCount',orderController.ordersCount);
router.get('/orderdetails',orderController.getOrderDetails);

module.exports=router;
