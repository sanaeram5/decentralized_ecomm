const moongoose=require("mongoose");

const deliveryPersonSchema=new moongoose.Schema({
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

const DeliveryPerson=new moongoose.model("DeliveryPerson",deliveryPersonSchema);

module.exports=DeliveryPerson;