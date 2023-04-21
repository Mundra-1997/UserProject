const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()
const app = express();
connectDb();
app.use(express.json());

const port = process.env.PORT;

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log("server running")
})