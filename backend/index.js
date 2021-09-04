const port= process.env.PORT||3000;

const express=require('express');
const app=express();
const path=require("path");
require('./db/conn');
const hbs=require("hbs");

const Register=require("./models/seller");
const Product=require("./models/product");
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

//to register a user
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
                //to save the user
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

//to login the user
app.post("/login",async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    try{
        console.log(req.body);
        
        const email=req.body.mail;
        const password=req.body.pass;
        //to check if the user exists using email id
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

//to create an product
app.post("/create-product",async (req,res)=>{
    try{
        console.log(req.body);
        //object for creating a product
        const createProduct=new Product({
            name:req.body.name,
            description:req.body.description,
            img:req.body.img,
            price:req.body.price,
            seller:req.body.seller,
            date:req.body.date
        })
        //to save a product
        const product=await createProduct.save();
        res.status(201).send('success');
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
            const description=req.body.description;
            const img=req.body.img;
            const price=req.body.price;
            const seller=req.body.seller;
            const date=req.body.date;
        //to find a product by name and update it
        const eventname= await Event.findOneAndUpdate({name:name},{
            description:req.body.description,
            img:req.body.img,
            price:req.body.price,
            seller:req.body.seller,
            date:req.body.date
        });
        res.status(201).send("updated");
    }catch(err){
        res.status(400).send(err);
    }
})

app.listen(port,()=>{
    console.log("server is up")
});