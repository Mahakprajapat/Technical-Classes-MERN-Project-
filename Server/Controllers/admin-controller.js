const User = require("../models/User-model");
const Contact = require("../models/contactscgema-model");

const getAllUsers= async (req,res)=>{
    try{
        // password:0 :- it will not display the password to the admin
        const users = await User.find({},{password:0});
        console.log(users);
        if(!users || users.length === 0){
            return res.status(404).json({message:"no users found"});
           
        }
        return res.status(200).json(users);
       
    }catch(error){
        next("admin-users-error",error);
    };

};
// contacts for admin
const getAllContacts= async (req,res)=>{
    try{
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"no contact found"});
        }
        return res.status(200).json(contacts);
    }catch(error){
        next("admin-contacts-error",error);
    }
};

// user_id delete by admin

const deleteUserById = async (req,res)=>{
    try{
        const id = req.params.id;
        await User.deleteOne({ _id : id });
        return res.status(200).json({message:"user data deleted successfully"});
    }catch(error){
        next(error)
    }
};


//  contact_id delete by admin
const deleteContactsById = async (req,res)=>{
    try{
        const id = req.params.id;
        await Contact.deleteOne({ _id : id });
        return res.status(200).json({message:"contact data deleted successfully"});
    }catch(error){
        next(error)
    }
};





// single user update the data of user by id

const getUserById = async (req,res)=>{
    try{
        const id = req.params.id;
       const data =  await User.findOne({ _id :id },{password:0});
        return res.status(200).json(data);
    }catch(error){
        next(error)
    }
};

// update the users data by tere id
 
const updateUserById = async ( req,res)=>{
    try{
        const id = req.params.id;
        // req.body = user ka sara data gain kiya hain 
        const updateUserData = req.body;
        const updatedData = await User.updateOne(
         {_id:id},
         {
            $set: updateUserData,
         });
        return res.status(200).json(updatedData)
    }catch(error){
        next(error);
    }
}

module.exports = {getAllUsers,
    getAllContacts , 
    deleteUserById,
    getUserById,
    updateUserById,
    deleteContactsById,
};