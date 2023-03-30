const express=require('express');
const app=express();
const router=require('./routes/post.router');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',router);

app.listen(5000,()=>{
    console.log("app is listening on 5000 port");
})

mongoose.connect('mongodb+srv://Jaykishan:Jaykishan007@cluster0.nkauod0.mongodb.net/',{useNewURLParser:true,useUnifiedTopology:true})
.then(()=>{console.log('connected to DB')})
.catch((error)=>{throw error})
