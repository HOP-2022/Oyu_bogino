const { request , response } = require("express");
const UserModel = require('../Model/userModel');
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'placeholder_secret'
const bcrypt = require("bcrypt");
const { emit } = require("../Model/userModel");

exports.signup = async (request, response, next) => {
    try {
        const {password, email} = request.body;
        const existingUser = await UserModel.findOne({ email:email });
        if(existingUser) { 
            return response.status(409).json({message:"butgeltei hereglegch baina"});
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const result = await UserModel.create({
            email:email,
            password:hashedPassword,
            ad :"user",
        });
        const token = jwt.sign({email:result.email, id: result._id}, SECRET_KEY);
        response.status(201).json({user:result, token:token});
    } catch(error){
        response.status(500).json({message:"ymar negenzuil buruu baina"});
        console.log(error);
    }
}



exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const existingUser = await UserModel.findOne({
        email,
      });
      if (!existingUser) {
        return res
          .status(404)
          .json({ message: "email esvel nuuts ud buruu baina" });
      }
      const matchPassword = await bcrypt.compare(password, existingUser.password);
      if (!matchPassword) {
        return res
          .status(404)
          .json({ message: "email esvel nuuts ug buruu baina" });
      }
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id , message: "nevterlee"},
        SECRET_KEY
      );
      res.status(201).json({ user: existingUser, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "ymar negen zuil buruu baina" });
    }
  };



  exports.getAdmin = async (req,res,next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await UserModel.findOne({
          email,
        });
        if (!existingUser) { 
          return res
            .status(404)
            .json({ message: "email esvel nuuts ud buruu baina" });
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
          return res
            .status(404)
            .json({ message: "email esvel nuuts ug buruu baina" });
        }
        const token = jwt.verify(
          { email: existingUser.email, id: existingUser._id , message: "nevterlee"},
          SECRET_KEY
        );
        res.status(201).json({ user: existingUser, token });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ymar negen zuil buruu baina" });
      }
}


exports.getUsers = async (request,response,next) => {
    try{
        const users = await UserModel.find();
        response.status(200).json({
            message:true,
            data:users,
        })
    }catch(error){
        return response.status(400).json({message:error , data:null})
    }
}


exports.getUser = async (request,response,next) => {
  
    const { id } = request.params;
    try{
        const user = await UserModel.findById(id);
        response.status(200).json({
            message:true , 
            data:user
        })
    }catch(error){
        console.log(error)
        return response.status(400).json({message:error , data:null})
    }
}



// exports.getUser = async (request,response,next) => {
//     const { id } = request.params;
//     try{
//         const user = await UserModel.findById(id);  
//         response.status(200).json({
//             message:true , 
//             data:user
//         })
//     }catch(error){
//         return response.status(400).json({message:error , data:null})
//     }
// }


    



// exports.updateUser = async (request,response,next) => {
//     const { id } = request.params;
//     try{
//         const user = await UserModel.findByIdAndUpdate(id, {...request.body});
//         response.status(200).json({
//         message:`user with ${request.params.id} id is update`,
//         data:user
//         })
//     }catch(error){
//         response.status(400).json({message:error , data:null})
//     }
// }

