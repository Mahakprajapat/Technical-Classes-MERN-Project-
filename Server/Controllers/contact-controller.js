const Contact = require("../models/contactscgema-model")


const contactFrom = async(req,res)=>{
    try{
        const respone = req.body;
        await Contact.create(respone);
        return res.status(200).json({message:"message send successfully"});
    } catch(error){
        return res.status(500).json({message:"message not delivered"});
    }

};

module.exports = contactFrom;