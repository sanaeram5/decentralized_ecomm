const port= process.env.PORT||3000;

const express=require('express');
var cors = require('cors');

const app=express();
app.use(cors({origin: true, credentials: true}));
const path=require("path");
require('./db/conn');
const hbs=require("hbs");

const Register=require("./models/seller");
const Product=require("./models/product");
const Order=require("./models/order");
const Customer=require("./models/customer");
const DeliveryPerson=require("./models/deliveryperson");
const middleware = require('./middleware');
const bcrypt = require('bcrypt');


const rounds = 10

const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"


app.use(express.json());
//app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.render("register");
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
    res.render("login");
})

//to register a seller
app.post("/register",async (req,res)=>{
    try{
        console.log(req.body);
        //to encrypt the password
        bcrypt.hash(req.body.pass,rounds,(error,hash)=> {
            if(error)
                res.status(500).json(error)
            else{
                const registerUser=new Register({
                    name:req.body.name,
                    mail:req.body.mail,
                    pass:hash
                })
                //to save the seller
                const register = registerUser.save();
                res.status(200).json("user created")
            }
        })
        
    }catch(err){
        res.status(400).send(err);
    }
})

//to generate jwt token for user authentication
function generateToken(user){
    return jwt.sign({data:user}, tokenSecret, {expiresIn: '24h'})
}

//to login the seller
app.post("/login",async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try{
        console.log(req.body);
        
        const email=req.body.mail;
        const password=req.body.pass;
        //to check if the seller exists using email id
        await Register.findOne({mail:email}).then(user =>{
            if(!user)
                res.status(404).json({error: 'no user with the email found'})
            else{
                //to check if the password is correct
                bcrypt.compare(req.body.pass, user.pass, (error, match)=>{
                    if(error)
                        res.status(500).json(error)
                    else if(match)
                    {
                        user.token=generateToken(user);
                        Register.findOneAndUpdate({mail:email},{token:user.token});
                        const tk=Register.findOne({mail:email});
                        res.status(200).json(user)
                        //res.status(201).render("index");
                    }
                        
                    else   
                        res.status(403).json({error:"password is incorrect"})
            })
        }
        });
    }catch(err){
        res.status(400).send(err);
    }
})

//to register a customer
app.post("/register-customer",async (req,res)=>{
    try{
        console.log(req.body);
        //to encrypt the password
        bcrypt.hash(req.body.pass,rounds,(error,hash)=> {
            if(error)
                res.status(500).json(error)
            else{
                const registerCustomer=new Customer({
                    name:req.body.name,
                    mail:req.body.mail,
                    pass:hash
                })
                //to save the customer
                const register = registerCustomer.save();
                res.status(200).json("user created")
            }
        })
        
    }catch(err){
        res.status(400).send(err);
    }
})

//to login the customer
app.post("/login-customer",async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try{
        console.log(req.body);
        
        const email=req.body.mail;
        const password=req.body.pass;
        //to check if the customer exists using email id
        await Customer.findOne({mail:email}).then(user =>{
            if(!user)
                res.status(404).json({error: 'no user with the email found'})
            else{
                //to check if the password is correct
                bcrypt.compare(req.body.pass, user.pass, (error, match)=>{
                    if(error)
                        res.status(500).json(error)
                    else if(match)
                    {
                        user.token=generateToken(user);
                        Customer.findOneAndUpdate({mail:email},{token:user.token});
                        const tk=Customer.findOne({mail:email});
                        res.status(200).json(user)
                        //res.status(201).render("index");
                    }
                        
                    else   
                        res.status(403).json({error:"password is incorrect"})
            })
        }
        });
    }catch(err){
        res.status(400).send(err);
    }
})

//to register a delivery person
app.post("/register-delivery",async (req,res)=>{
    try{
        console.log(req.body);
        //to encrypt the password
        bcrypt.hash(req.body.pass,rounds,(error,hash)=> {
            if(error)
                res.status(500).json(error)
            else{
                const registerDeliveryPerson=new DeliveryPerson({
                    name:req.body.name,
                    mail:req.body.mail,
                    pass:hash
                })
                //to save the delivery person
                const register = registerDeliveryPerson.save();
                res.status(200).json("user created")
            }
        })
        
    }catch(err){
        res.status(400).send(err);
    }
})

//to login the delivery person
app.post("/login-delivery",async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try{
        console.log(req.body);
        
        const email=req.body.mail;
        const password=req.body.pass;
        //to check if the delivery person exists using email id
        await DeliveryPerson.findOne({mail:email}).then(user =>{
            if(!user)
                res.status(404).json({error: 'no user with the email found'})
            else{
                //to check if the password is correct
                bcrypt.compare(req.body.pass, user.pass, (error, match)=>{
                    if(error)
                        res.status(500).json(error)
                    else if(match)
                    {
                        user.token=generateToken(user);
                        DeliveryPerson.findOneAndUpdate({mail:email},{token:user.token});
                        const tk=DeliveryPerson.findOne({mail:email});
                        res.status(200).json(user)
                        //res.status(201).render("index");
                    }
                        
                    else   
                        res.status(403).json({error:"password is incorrect"})
            })
        }
        });
    }catch(err){
        res.status(400).send(err);
    }
})

//to create a product
app.post("/create-product",async (req,res)=>{
    try{
        console.log(req.body);
        //object for creating a product
        const createProduct=new Product({
            name:req.body.name,
            description:req.body.description,
            img:req.body.img,
            quantity:req.body.quantity,
            price:req.body.price,
            seller:req.body.seller,
            created_at:req.body.created_at
        })
        //to save a product
        const product=await createProduct.save();
        res.status(201).send('success');
    }catch(err){
        res.status(400).send(err);
    }
})

//to get a product by name
app.post("/get-product",async (req,res)=>{
    try{
        console.log(req.body);
        
        const name=req.body.name;
        //to find the product by name
        const productname= await Product.findOne({name:name});
        //to display details of the product
        res.status(201).send({name:productname.name,img:productname.img,description:productname.description,quantity:productname.quantity,price:productname.price,seller:productname.seller,created_at:productname.created_at});
    }catch(err){
        res.status(400).send(err);
    }
})

//to get all products in json format
app.get("/get-all-products",async(req,res)=>{
    try{
    res.header( "Access-Control-Allow-Origin","*" );
	const product=await Product.find({},{__v:0});
	res.status(200).send(product);
	}catch(err){
	    res.status(400).send(err);
	}
})

//to delete product by name
app.post("/delete-product",async (req,res)=>{
    try{
        console.log(req.body);

        const name=req.body.name;
        //to delete event by name
        const eventname= await Product.deleteOne({name:name});
        res.status(201).send("product deleted");
    }catch(err){
        res.status(400).send(err);
    }
})

//to update a product by name
app.post("/update-product",async (req,res)=>{
    try{
        console.log(req.body);
        
            const name=req.body.name;
        //to find a product by name and update it
        const productname= await Product.findOneAndUpdate({name:name},{
            description:req.body.description,
            img:req.body.img,
            quantity:req.body.quantity,
            price:req.body.price,
            seller:req.body.seller,
            created_at:req.body.created_at
        });
        res.status(201).send("updated");
    }catch(err){
        res.status(400).send(err);
    }
})

//to create an order
app.post("/create-order",async (req,res)=>{
    try{
        console.log(req.body);
        //object for creating an order
        const createOrder=new Order({
            product_name:req.body.product_name,
            price:req.body.price,
            quantity:req.body.quantity,
            buyer:req.body.buyer,
            seller:req.body.seller,
            created_at:req.body.created_at,
            status:req.body.status
        })
        //to save an order
        const order=await createOrder.save();
        res.status(201).send('success');
    }catch(err){
        res.status(400).send(err);
    }
})

//to get an order by product name
app.post("/get-order",async (req,res)=>{
    try{
        console.log(req.body);
        
        const product_name=req.body.product_name;
        //to find the order by product name
        const productname= await Order.findOne({product_name:product_name});
        //to display details of the product
        res.status(201).send({
            product_name:productname.product_name,
            price:productname.price,
            quantity:productname.quantity,
            buyer:productname.buyer,
            seller:productname.seller,
            created_at:productname.created_at,
            status:productname.status
        });
    }catch(err){
        res.status(400).send(err);
    }
})


//to delete an order by product name
app.post("/delete-order",async (req,res)=>{
    try{
        console.log(req.body);

        const product_name=req.body.product_name;
        //to delete an order by product name
        const productname= await Order.deleteOne({product_name:product_name});
        res.status(201).send("order deleted");
    }catch(err){
        res.status(400).send(err);
    }
})

//to update an order by product name
app.post("/update-order",async (req,res)=>{
    try{
        console.log(req.body);
        
            const product_name=req.body.product_name;
        //to find an order by product name and update it
        const productname= await Order.findOneAndUpdate({product_name:product_name},{
            product_name:req.body.product_name,
            price:req.body.price,
            quantity:req.body.quantity,
            buyer:req.body.buyer,
            seller:req.body.seller,
            created_at:req.body.created_at,
            status:req.body.status
        });
        res.status(201).send("updated");
    }catch(err){
        res.status(400).send(err);
    }
})

//to update an order status by product name
app.post("/update-orderstatus",async (req,res)=>{
    try{
        console.log(req.body);
        
            const product_name=req.body.product_name;
        //to find an order by product name and update it
        const productname= await Order.findOneAndUpdate({product_name:product_name},{
            status:req.body.status
        });
        res.status(201).send("updated");
    }catch(err){
        res.status(400).send(err);
    }
})



app.listen(port,()=>{
    console.log("server is up")
});
