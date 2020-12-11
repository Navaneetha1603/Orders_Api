const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const router = require("./routes/OrderRoutes");
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors())
var dbURL="mongodb+srv://mindtree:mindtree@cluster0.wuc4i.mongodb.net/orders?retryWrites=true&w=majority";
mongoose.connect(dbURL,()=>{
    console.log("connected");
})
app.use("/",router);
app.listen(2900,()=>{
    console.log("listening to port 2900");
})