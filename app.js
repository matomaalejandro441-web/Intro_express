import express from "express";
import "dotenv/config";
import bodyparser from "body-parser";//importacion es "module"//

const app = express();
const port = process.env.PORT || 3030;

//configurar el uso de body-parse para nuestra aplicacion
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function (req, res) {
    res.send("Hola, estamos aprendiendo Express con la ficha 3407184");
});

//otro endpoint, funcion de flecha
app.get("/productos", (req,res)=>{
    //usando template string ``
    res.send(`<h1>listado de productos</h1>
        <ol>
        <li>tv</li>
        <li>phone</li>
        <li>audifonos</li>
        <ol> `)
} )


app.listen(port, function () {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});