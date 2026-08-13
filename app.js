const express = require('express');
const app = express();
const port = 3090;

app.get("/", function (req,res) {
    res.send("API de aprendices, Endpoint principal")
})

const listaAprendices=[{"nombre":"ana","edad":22,"correo":"juan@gmail.com","imgperfil":"url"},
    {"nombre":"james","edad":39,"correo":"jam@gmail.com","imgperfil":"url"}, 
    {"nombre":"pablito","edad":44,"correo":"pablito@gmail.com","imgperfil":"url"}]

app.get("/aprendices", (req,res) => {
    res.json(listaAprendices)
})

app.get("/aprendices/:nombre", (req, res) => {
    const nombreBusqueda = req.params.nombre.toLowerCase();

    const aprendizEncontrado = listaAprendices.find(
        (aprendiz) => aprendiz.nombre.toLowerCase() === nombreBusqueda
    );

    res.json(aprendizEncontrado);
});


app.listen(port, function()  {
    console.log(`SERVIDOR: http://localhost:${port}`)
})