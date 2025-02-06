
const express =  require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary").v2;
//app.use(bodyParser.json()); // Parses application/json
const cors = require('cors');
//app.use(cors());

const app = express()
app.use(express.json());
//const cors = require('cors')
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
 
    credentials: true,
}))

app.use(express.json());
connectDB();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/protected', (req,res)=>{
    res.json({message: "This user is protected data", user: req.user})
});


app.use("/blog",require('./route/api/blog'));
//app.use("/blog",require('./route/api/blog'));
app.use("/email",require('./route/api/email'));


const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
