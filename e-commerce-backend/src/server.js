require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {dbConnecter} = require("./utils/dbConnecter");

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser());

app.listen(PORT, () =>{
    dbConnecter();
    console.log(`Server is Up and Running on ${PORT}..`);
});

