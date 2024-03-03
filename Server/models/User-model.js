const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});

// json web token
userSchema.methods.generateToken = async function(){
  try{
        return jwt.sign({
            UserId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
         },
         process.env.JWT_SECTECT_KEY,{
            expiresIn: "30d",
         }
         )
  } catch(error){
    console.error(error);
  } 
};

// define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;