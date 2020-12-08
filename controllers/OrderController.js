// const { json } = require("body-parser");
const Order=require("../model/Order");
const orderDetails=require('../model/orderDetails');
const getOrders=async(req,res)=>{
    try{
        const orders=await Order.find({});
        // return res.send(JSON.stringify(orders));
        return res.json({data:orders})
    }
    catch(err){
        return res.status(200).json(err);
    }
}
const createOrderDetails=async(req,res)=>{
    try{
        const orderdetails=new orderDetails(req.body);
        // orderDetails.orderdate=req.body.orderdate;
        await orderdetails.save();
        return res.json({message:"inserted"});
    }
    catch(err){
        return res.status(200).json(err);
    }
}
const ordersCount=async(req,res)=>{
    try{
        const count=await orderDetails.count();
        return res.json(count);
    }
    catch(err){
        return res.status(200).json(err);
    }
}

const createOrders=async(req,res)=>{
   try{
       let user_id=req.body.user_id;
    //    console.log(user_id);
    //    console.log(req.body);
    //     console.log(req.body.user_id);
    //     console.log(req.body.order_details[0].item_purchased);
    //     console.log(req.body.order_details[0].total_price);
    const orderdetails=new orderDetails({
        user_id:req.body.user_id,
        order_date:req.body.order_details[0].order_date,
        item_purchased:req.body.order_details[0].item_purchased,
        total_price:req.body.order_details[0].total_price
    })
    await orderdetails.save();
       const checkUser=await Order.find({"user_id":user_id});
       console.log(checkUser.length);
       if(checkUser.length>=1){
        //    await Order.updateOne({"user_id":user_id},{$set:req.body})
        //    return res.json({message:"success"});
        console.log(req.body.order_details);
        await checkUser.order_details.push(req.body.order_details);
        // checkUser.order_details.push(req.body.order_details);
        // let orderdetails=req.body.order_details;
        // await Order.order_details.push({orderdetails})
        return res.json({message:checkUser});
       }
       else{
            console.log("hello");
           const orders=new Order(req.body);
               try{
                //    await orderDetails.save();
                   await orders.save();
                   return res.json({data:orders})
               }
               catch(err){
                   return res.status(200).json(err);
               }
           }
       }
       catch(err){
           return res.status(200).json(err);
       }
   }
   //get the order by user_id
   const getUserId=async(req,res)=>{
       let id=req.params.userId;
       try{
            let check=await Order.find({"user_id":id});
            if(check.length>=1){
                return res.json({data:check});
            }
            else{
                return res.status(200).json(`${id} is not found`);
            }
       }
       catch(err){
           return res.status(200).json(err);
       }
   }
   //count the number of records in the orders table
   const counting =async(req,res)=>{
       try{
            const count=await Order.count();
            return res.json({"count":count});
       }
       catch(err){
           return res.status(200).json(err);
       }
   }
   const getOrderDetails=async(req,res)=>{
       try{
            const orders=await orderDetails.find({});
            return res.json({data:orders});
       }
       catch(err){
           return res.status(200).json(err);
       }
   }
  
   module.exports={
    getOrders,
    createOrders,
    counting,
    getUserId,
    createOrderDetails,
    ordersCount,
    getOrderDetails
}

// const createOrders=async(req,res)=>{
//     // const {user_id,order_date,product_name,product_qty,product_price,total_price}=req.body;
//     // console.log(`${user_id},${order_date1},${product_name}`);
//     const {user_id,order_date,product_name,product_qty,product_price,total_price}=req.body;
//     try{
//         // console.log(`${user_id},${order_date1},${product_name}`);
//         let checkUser=await Order.findOne({user_id});
//         if(checkUser){
//             //if user is already exists then push them to order details
//             // checkUser.item_purchased.push({product_name,product_qty,product_price});
//             // checkUser.order_details.push({order_date,item_purchased,total_price});
//             // checkUser.order_details.push({order_date,item_purchased:[{product_name,product_qty,product_price}],total_price});
//             // checkUser.item_purchased.push({product_name,product_qty,product_price});
//             //checkUser.order_details.push({order_date,item_purchased:({product_name,product_qty,product_price}),total_price});
//             checkUser.order_details.push({order_date,total_price});
//             checkUser= await checkUser.save();
//             return res.json({message:"appended"});
//         }
//         else{
//             // const orders=await Order(req.body);
//             const orders=await Order.create({
//                 user_id,order_details:[{order_date,
//                     item_purchased:[{product_name,product_qty,product_price}],
//                     total_price}]
//             })
//             await orders.save();
//             return res.json({data:orders});
//         }
//     }
//     catch(err){
//         return res.status(200).json(err);
//     }
// }




  // const order=new Order(req.body);
    // order.user_id=req.body.user_id;
    // // order.order_date=date.getDate()
    // order.order_date=req.body.order_date;
    // order.total_price=req.body.total_price;

    // const {user_id,order_date,product_name,product_qty,product_price,total_price}=req.body;
    // try{
    //     console.log(user_id);
    //     let checkUser=await Order.findOne({user_id});
    //     if(checkUser){
    //         console.log(checkUser)
    //         //push the orders in to orders array
    //         checkUser.order_details.push({product_name,product_qty,product_price});
    //         checkUser=await Order.save();
    //     }
    //     else{
    //         //user id is not exist then create the new order
    //         const orders=await Order.create({
    //             user_id,
    //             order_date,
    //             order_details:[{product_name,product_qty,product_price}],
    //             total_price
    //         });
    //         return res.json({data:orders})
    //     }
    // }

    // const date=new Date();
// const createOrders=async(req,res)=>{
//     const order=new Order(req.body);
//    try{
//        await order.save();
//        return res.json({message:"inserted"})
//    }
//     catch(err){
//         return res.status(200).json(err);
//     }
// }