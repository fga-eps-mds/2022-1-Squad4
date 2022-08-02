const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userControler = require('../src/controller/UserController.js');

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "GFour Invext"
    });
});

app.use('/usuario', userControler);

module.exports = app;