const mongoose=require("mongoose");
const ordersDetailSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    status:{
        type:String,
        default:"Pending"
    },
    orderDate:{
        type: Date,
        default: Date.now
      },
    item_purchased:[{
    productId:Number,
    productName:String,
    productQty:Number,
    productPrice:Number
    }],
    totalPrice:{
        type:Number
    }
})
const orderDetails=mongoose.model('orderDetails',ordersDetailSchema);

module.exports=orderDetails;