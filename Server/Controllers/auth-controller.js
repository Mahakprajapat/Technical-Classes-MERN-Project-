const User = require("../models/User-model");
const bcrypt =  require("bcryptjs");


// home page logic
const home = async (req,res)=>{
  try{
    res.status(200).send("welcome to router page again");

  } catch (error){
    console.log(error);
  }
}

// register logic 

const register = async (req,res)=>{
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email:email});
        if(userExist){
          return res.status(400).json({message:"email already exists"})
        }

        // hash the password 
          const saltRound = 10;
          const hash_password = await bcrypt.hash(password,saltRound);

          const usercreated = await User.create({
            username,
            email,
            phone,
            password:hash_password
          });
  
        res.status(201).json({
        msg : "registration successfully done" , 
        token: await usercreated.generateToken(),
         userId: usercreated._id.toString(),
        } );
    } catch(error){
      //  res.status(500).json("internal server error");
      next(error);
    }
};

// user login page
 const login = async (req,res)=>{
    try{
        const {email,password} = req.body; 
        const userExist = await User.findOne({email});
        console.log(userExist)
        if(!userExist){
            return res.status(400).json({message:"Invalid dataaa"});
        }

        const userpasswordvalid = await bcrypt.compare(password, userExist.password);

        if(userpasswordvalid){
          res.status(200).json({
            msg:"login successful",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
          });
        }else{
          res.status(401).json({message:"Invalid email or password"});
        }

    } catch{
        res.status(500).json("login issue");
    }
 };
// to send user data to the frontend contact page - user logic

const user = (req,res)=>{
  try{
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
  }catch (error){
    console.log(error)
  }
}

module.exports = {home , register, login ,user};