// json web token verfication 
// if token is  valid then get the user data send it to req.user(auth-controller,js)

const jwt = require("jsonwebtoken");
const user = require("../models/User-model.js")

// middleware me next use krna padta jisse vo auto-router(autocontroller.user) p jata hai
const Authmiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        // if your attempt to use an expired token you'll receive a 401 unauthorizes http response
        return res
            .status(401)
            .json({ message: "Unauthorized HttP ,token not provided" })
    }
    // assuming token is in the format Bearer <jwttoken>, removing the "bearer" prefix
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token form auth middleware", jwtToken)
    try {
        const isverified = jwt.verify(jwtToken, process.env.JWT_SECTECT_KEY);
        const userData = await user.findOne({email: isverified.email}).
        select({password:0});
        console.log(userData);
        
        req.user = userData;
        req.token = token;
        req.userID = userData._id
        
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Unauthorized , INvalid token " })
    }

};

module.exports = Authmiddleware;