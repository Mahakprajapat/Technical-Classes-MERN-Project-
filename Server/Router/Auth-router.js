const express = require("express");
const router = express.Router();
const Authcontroller = require("../Controllers/auth-controller.js");
const {loginSchema, signupSchema}  = require("../Validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js")
const Authmiddleware = require("../middlewares/Auth-middleware.js")

router.route("/").get(Authcontroller.home); 
router.route("/register").post(validate(signupSchema),Authcontroller.register);
router.route("/login").post( validate(loginSchema), Authcontroller.login);

router.route('/user').get(Authmiddleware , Authcontroller.user);

module.exports = router;









// router.get("/",(req,res)=>{
//   res.status(200).send("welcome to the router");
// });
// router.post("/",(req,res)=>{
//   res.status(200).send("welcome to the page");
// });
// we can also use this type of router