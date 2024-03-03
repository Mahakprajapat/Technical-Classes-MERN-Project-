const {z} = require("zod");

const loginSchema = z.object({
   email : z 
   .string({required_error:"Email is required"})
   .trim()
   .email({message:"invlaid email address"})
   .min(3,{message:"email must be of atleast of 3 character.."})
   .max(255,{message:"email must not be more than 255 char"}),


   password: z
    .string({required_error:"password is required"})
    .min(8,{message:"password must be atleast of 8 digit"})
    .max(20,{message:"password must not be more than 20 digit"}),

})

// creating an object schema

 const signupSchema = loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name atleast of 3 character.."})
    .max(255,{message:"Name must not be more than 255 characters.."}),
     

    phone : z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be atleast of 10 digit"})
    .max(20,{message:"phone must not be more than 20 digit"}),

 });

 module.exports = {signupSchema,loginSchema};