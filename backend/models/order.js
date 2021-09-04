const moongoose=require("mongoose");

const OrderSchema=new moongoose.Schema({
    product_name:{
        type:String,
        required:true,
        unique:true
    },   
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    buyer:{
        type:String,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    created_at:{
         type: Date, 
         default: Date.now 
    },
    status:{
        type:String,
        default:"Not Dispatched"
    }
})

const Order=new moongoose.model("Order",OrderSchema);

module.exports=Order;