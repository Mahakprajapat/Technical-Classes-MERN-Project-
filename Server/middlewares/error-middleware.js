const errorMiddleware = (err,req,res,next)=>{
 const status = err.status || 500;
 const message = err.message || "IT'S BACKEND ERROR ";
 const extraDetails = err.extraDetails || "it's ddeatils backend error";

 return res.status(status).json({message,extraDetails});



};

module.exports = errorMiddleware;