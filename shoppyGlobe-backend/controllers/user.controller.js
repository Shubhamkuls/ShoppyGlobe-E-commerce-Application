import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const secretKey = 'secretKey';
//Registering User
export async function register(req,res){
    const { name,email,password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error:"Email already exist"});
        }
        const user = new User({name, email, password});
        await user.save();
        res.status(201).json({message: 'User registed successfully'});
    }catch(err){
        res.status(500).json({ error: "Registration failed" });
    }
}
//Login User
export async function login(req,res){
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user || user.password !== password){
            return res.status(401).json({message:'Wrong Email or password'});
        }
        const token = jwt.sign({userId: user._id}, secretKey, {expiresIn: '1h'});
        res.json({token});
    }catch(err){
        res.status(500).json({ error: "Login failed" });
    }
}