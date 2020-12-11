const orderDetails=require('../model/orderDetails');
//get the orderdetails
const getOrderDetails=async(req,res)=>{
    try{
        const orders=await orderDetails.find({});
        return res.status(200).json(orders)
    }
    catch(err){
        return res.status(500).json(err);
    }
}
//create order details
const createOrderDetails=async(req,res)=>{
    try{
        const orderdetails=new orderDetails(req.body);
        await orderdetails.save();
        return res.status(201).json(orderdetails)
    }
    catch(err){
        return res.status(500).json(err);
    }
}
//get the orders details count
const ordersCount=async(req,res)=>{
    try{
        const count=await orderDetails.count();
        return res.status(200).json(count);
    }
    catch(err){
        return res.status(500).json(err);
    }
}
 //get the ordersdetails by date
   const getOrdersBydate=async(req,res)=>{
       let orderDate=req.params.date;
       try{
            const orders=await orderDetails.find({"order_date":orderDate});
            return res.json({data:orders});
       }
       catch(err){
           return res.status(200).json(err);
       }
   }
  
   module.exports={
    getOrderDetails,
    getOrdersBydate,
    ordersCount,
    createOrderDetails
}
