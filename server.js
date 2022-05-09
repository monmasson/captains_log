const express = require("express");
const server = express();

const morgan = require("morgan")
const {schema }= require("./Models/logSchema")


const dotenv = require("dotenv")
const seedRoute = require("./Routes/seedRoute")
const createRoute = require("./Routes/createRoute")
const indexRoute = require("./Routes/indexRoute")

const PORT = process.env.PORT || 3001




dotenv.config();
const mongoConfig = require("./config");
require("dotenv").config()
const bodyParser = require("body-parser")


server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use("/seedRoute", seedRoute)
server.use("/createRoute", createRoute)
server.use ("/indexRoute", indexRoute)






server.listen(PORT, () => {
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
});
