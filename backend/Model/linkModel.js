const {model , Schema} = require("mongoose")

const LinkSchema = new Schema({
    link:String,
    short:String,
    id:String,
    owner:{ 
        type:Schema.ObjectId, 
        ref:"User" , 
        required:true
    },
});


const LinkModel= model("Link" , LinkSchema);   //links

module.exports = LinkModel; 