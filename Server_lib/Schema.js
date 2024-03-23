const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0./Case");


const BookSchema=new mongoose.Schema({
    book_id:String,
    Name:String,
    Available:Number
})

const UserSchema=new mongoose.Schema({
    user_id:String,
    Name:String,
    hold:Array
})

const Book=mongoose.model("Book",BookSchema);
const User=mongoose.model("User",UserSchema);

module.exports={Book,User}

