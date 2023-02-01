const {model , Schema} = require("mongoose")

const UserSchema = new Schema(
    {
        email:String,
        id:String,
        password:String,
        role:{
            type:String,
            default:"user",
            enum:["user" , "admin", "superadmin"]
        }
    },
    {timestamps:true}
);


const UserModel= model("User" , UserSchema);

module.exports = UserModel; 