const moongoose=require("mongoose");

const userSchema=new moongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mail:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

const Seller=new moongoose.model("Seller",userSchema);

module.exports=Seller;