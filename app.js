const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());


app.use(cors());

// database connection
const {mongoDB}= require("./config/mongodb");
mongoDB();

// api_call
const user = require("./route/user/allroutes");
const admin = require("./route/admin/allroutes");


//api
app.use("/api/admin",admin)
app.use("/api/user",user)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});