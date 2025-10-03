const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../database/Schema/userSchema');

const login = async(req, res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message: "Username and Password are required"});
    }
    //checking user
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).json({message: "User not found"});
    }
    //checking password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid Password"});
    }
    //generating token
    const token = jwt.sign({id: user._id, user: user}, process.env.JWT_SECRET, {expiresIn: '1d'});
    res.status(200).json({message: "Login Successful", token, user: user});
}

const signup = async(req, res)=>{
    const {username ,email, password} = req.body;
    if(!email || !password || !username){
        return res.status(400).json({message: "Username, Email and Password are required"});
    }
    //checking user
    const user = await User.findOne({email, username});
    if(user){
        return res.status(400).json({message: "Already a user"});
    }
    //creating new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    await newUser.save();
    
    //generating token
    const token = jwt.sign({id: newUser._id, user: newUser}, process.env.JWT_SECRET, {expiresIn: '1d'});
    res.status(200).json({message: "Signup Successful", token, user: newUser});
}

module.exports = {login, signup};