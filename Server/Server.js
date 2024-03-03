require("dotenv").config();

const express = require("express");
const app = express();
const authRoute = require('./Router/Auth-router.js');
const contactRoute = require('./Router/Contact-router.js');
const serviceRoute = require('./Router/Service-router.js');
const adminRoute = require('./Router/admin-router.js');
const connectDb = require('./utils/db.js');
const errorMiddleware = require("./middlewares/error-middleware.js");
const cors = require('cors');

// tells server if origin is this and makeing req then accpect this and share response
const corsOptions= {
    origin: "http://localhost:5173",
    methods: "GET, POST ,PUT ,DELETE ,PATCH ,HEAD",
    credentials: true,
};



app.use(cors(corsOptions));
// express.json = this line of code adds express middleware that parses incomig request bodies with json payload.  
app.use(express.json()); 

app.use("/api/Auth", authRoute);
// app.use("/api/Auth/register", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

connectDb().then(()=>{ 
app.listen(5000);
});