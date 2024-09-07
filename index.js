require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

//vars
const app = express();
const port = process.env.PORT || 3000 ;
const db_url = process.env.DBURL;


//Middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))



//Routes
require("./src/Routes")(app);

//DB connection
mongoose.connect(db_url).then(()=>{
    app.listen(port, ()=>console.log(`server is running on port ${port}`))
})

