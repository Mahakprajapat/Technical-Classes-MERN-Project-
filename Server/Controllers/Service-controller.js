const Service = require("../models/Service-model");

const services = async (req,res)=>{
try{
  const respone = await Service.find();
  if(!respone){
    // handle the case where no document was found
    res.status(404).json({msg:"no service found"});
    return;
}
  res.status(200).json({msg:respone})
}catch(error){
console.log("Service",error)
}
};

module.exports = services;