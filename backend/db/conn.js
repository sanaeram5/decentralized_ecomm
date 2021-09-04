const moongoose=require("mongoose");
const URI = 'mongodb+srv://jaanbaaz23:jaanbaaz23@cluster0.85imn.mongodb.net/ecomm?retryWrites=true&w=majority';

moongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});
