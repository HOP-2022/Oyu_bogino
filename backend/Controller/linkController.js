const { request , response } = require("express");
const LinkModel = require('../Model/linkModel');



exports.createLink = async (request, response , next) => {
    try {
        const createlink = await LinkModel.create({link:request.body.link })
        response
        .status(201)
        .json({message: `new link create`, data:createlink})
    } catch (error) {
        response
        .status(400)
        .json({message: `bad Request`, data:error})
    }
}


exports.getLink = async (request,response,next) => {
    const { id } = request.params;
    try{
        const link = await LinkModel.findById(id);
        response.status(200).json({
            message:true , 
            data:link
        })
    }catch(error){
        return response.status(400).json({message:error , data:null})
    }
}


    //  " /links"         link get ||all links||
exports.getLinks = async (request,response,next) => {
    try{
        const links = await LinkModel.find();
        response.status(200).json({
            message:true,
            data:links,
        })
    }catch(error){
        return response.status(400).json({message:error , data:null})
    }
}



exports.deleteLink = async (request, response) => {
    const { id } = request.params;
    try{        
        const link = await LinkModel.findByIdAndDelete(id)
        response.status(200).json({
            message:`user with ${request.params.id} id is delete`,
            data:link
            })
    }catch(error){
        response.status(400).json({message:error , data:null})
    }
}

