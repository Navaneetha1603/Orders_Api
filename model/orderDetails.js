const mongoose=require("mongoose");
const ordersDetailSchema=new mongoose.Schema({
    user_id:{
        type:String
    },
    order_date:{
        type:Date
    },
    item_purchased:[{
    product_name:String,
    product_qty:Number,
    product_price:Number
    }],
    total_price:{
        type:Number
    }
})
const orderDetails=mongoose.model('orderDetails',ordersDetailSchema);

module.exports=orderDetails;