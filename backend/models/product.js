const moongoose=require("mongoose");

const ProductSchema=new moongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        data:String
    },
    price:{
        type:Number,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    created_at:{
         type: Date, 
         default: Date.now 
    }
})

const Product=new moongoose.model("Product",ProductSchema);

module.exports=Product;