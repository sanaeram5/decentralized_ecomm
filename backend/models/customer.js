const moongoose=require("mongoose");

const customerSchema=new moongoose.Schema({
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

const Customer=new moongoose.model("Customer",customerSchema);

module.exports=Customer;