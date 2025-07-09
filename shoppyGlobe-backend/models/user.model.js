import mongoose from "mongoose";
//User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique:true
    },
    password: String
});

const User = mongoose.model("User", userSchema);
export default User;