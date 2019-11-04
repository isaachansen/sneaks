require("dotenv").config();
const express = require('express');
const session = require("express-session")
const massive = require("massive");
const app = express();

let { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`server live on port ${SERVER_PORT}`);
})