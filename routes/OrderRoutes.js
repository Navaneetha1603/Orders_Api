const orderController=require("../controllers/OrderController");
const express=require("express");
const router=express.Router();
//getting all orders placed by customer
router.get('/getOrders',orderController.getOrders);
//create all orders placed by customers
router.post('/createOrders',orderController.createOrders);
//get the orderdetails placed by specific customer
router.get('/getOrder/:userId',orderController.getUserId);
//get the number or customers who has placed the order
router.get('/userCount',orderController.counting);

// router.post('/orderDetails',orderController.createOrderDetails);
//get the total number of orders 
router.get('/orderCount',orderController.ordersCount);
//get the total order details
router.get('/totalOrders',orderController.getOrderDetails);
//get the orderdetails based on date
//http://localhost:2900/getOrders/2020-07-11T18:30:00.000Z
router.get('/getOrders/:date',orderController.getOrdersBydate);
module.exports=router;
