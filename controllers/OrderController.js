// const { json } = require("body-parser");
const Order=require("../model/Order");
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

const createOrders=async(req,res)=>{
    const {user_id,order_date,product_name,product_qty,product_price,total_price}=req.body;
    const order_date1=req.body.order_date;
    console.log(`${user_id},${order_date1},${product_name}`);
    try{
        let checkUser=await Order.findOne({user_id});
        if(checkUser){
            //if user is already exists then push them to order details
            // checkUser.item_purchased.push({product_name,product_qty,product_price});
            // checkUser.order_details.push({order_date,item_purchased,total_price});
            checkUser.order_details.push({order_date,item_purchased:[{product_name,product_qty,product_price}],total_price});
            // checkUser.item_purchased.push({product_name,product_qty,product_price});
            checkUser= await checkUser.save();
            return res.json({message:"appended"});
        }
        else{
            // const orders=await Order(req.body);
            const orders=await Order.create({
                user_id,order_details:[{order_date,item_purchased:[{product_name,product_qty,product_price}],total_price}]
            })
            return res.json({data:orders});
        }
    }
    catch(err){
        return res.status(200).json(err);
    }
}
module.exports={
    getOrders,
    createOrders
}



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