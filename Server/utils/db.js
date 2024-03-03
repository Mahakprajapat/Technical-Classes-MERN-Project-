const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;
// const URI = "mongodb+srv://MahakPrajapat:mahakpinu1@cluster0.ovln6dl.mongodb.net/mern_admin?retryWrites=true&w=majority";

const connectDb= async () =>{
    try{
        await mongoose.connect(URI);
        console.log('connection successful to DB')
    } catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;