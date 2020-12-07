const mongoose=require("mongoose");
const OrderSchema=new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    order_details:[
        {
            order_date:{
                type:Date
            },
            item_purchased:[{
            product_name:String,
            product_qty:Number,
            product_price:Number
        }]
        ,
        total_price:{
            type:Number
        }
        }]
})
const Order=mongoose.model("Order",OrderSchema);
module.exports=Order;
