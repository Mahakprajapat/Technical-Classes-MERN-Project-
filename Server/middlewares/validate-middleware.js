const validate = (schema)=> async (req,res,next) =>{
    try{
        const pareseBody = await schema.parseAsync(req.body);
        req.body = pareseBody;
        next();
    } catch(err){
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.errors[0].message
        
        const error = {
            status,
            message,
            extraDetails,
        };

        console.log(error);
        // res.status(400).json({msg: message });
        next(error);
    }
};

module.exports = validate;