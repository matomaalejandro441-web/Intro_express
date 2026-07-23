//const express = require('express');
import express from "express";
//import {configDotenv} from "dotenv"
//configDotenv()
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;


app.get("/", function (req, res) {
    res.send("Hola, estamos aprendiendo Express con la ficha 3407184");
});


app.listen(port, function () {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});