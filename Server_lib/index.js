
const Schema=require("./Schema");

const bodyParsder=require('body-parser');
const cors=require("cors");
const express=require('express');
const app=express()

app.use(bodyParsder.urlencoded({extended:false}))
app.use(bodyParsder.json())
app.use(
    cors({
        origin:"*",
    })
)


app.listen(2000,()=>{
    console.log('Server start')
})


app.get('/user',(req,res)=>{
    var v;
    async function f(){
         v=await Schema.User.find({});
         console.log(v);
         res.send(v);
    }
    f();
})

app.post('/user',(req,res)=>{
    const user=new Schema.User(req.body);
    res.send({"result":"helloworld"})
    console.log(req.body);
    user.save();
})


app.post('/book',(req,res)=>{
    const book=new Schema.Book(req.body);
    console.log(req.body);
    book.save().then(()=>{
        res.send(200)
    })
})

app.get('/book',(req,res)=>{
    var v;
   async function f(){
        v=await Schema.Book.find({});
        console.log(v);
        res.send(v);
   }
   f();
   
    
})


app.post('/updatebook',(req,res)=>{
    
    console.log(req.body);
    const filter={book_id:req.body.book_id};
    const ch={Available:req.body.Available};
    Schema.Book.findOneAndUpdate(filter,ch)
    .then(()=>console.log('done'))
})


app.post('/updateuser',(req,res)=>{
    
    console.log(req.body);
    const filter={user_id:req.body.user_id};
    const ch={hold:req.body.hold};
    console.log(filter,ch);
    Schema.User.findOneAndUpdate(filter,ch)
    .then(()=>console.log('done'))
})


app.post('/findu',(req,res)=>{
    console.log(req.body);
    var v;
    async function fun(){
        v=await Schema.User.find(req.body);
        console.log(v);
        res.send(v);

    }
    fun();
    
})

app.post('/findb',(req,res)=>{
    console.log(req.body);
    var v;
    async function fun(){
        v=await Schema.Book.find(req.body);
        console.log(v);
        res.send(v);

    }
    fun();
})