const express =require("express");
const dbConnect = require("./config/database");
const app =express();

require("dotenv").config();

const PORT = process.env.PORT||4000;
app.listen(PORT ,() =>{
    console.log("app is running on ${PORT}");
})

app.use(express.json());

const todoRoutes = require("./routes/Todo");
app.use("/api/v1", todoRoutes);

 const dbConnect = require("./config/database")
dbConnect();

app.get("/",(req,res)=>{
        res.send(`<h1>homepage</h1>`)
})