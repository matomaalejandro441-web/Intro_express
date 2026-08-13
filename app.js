const express = require('express');
const app = express();
const port = 3090;

app.use(express.json());

app.get("/", function (req,res) {
    res.send("API de aprendices, Endpoint principal")
})

const listaAprendices=[{"nombre":"ana","edad":22,"correo":"juan@gmail.com","imgperfil":"url"},
    {"nombre":"james","edad":39,"correo":"jam@gmail.com","imgperfil":"url"}, 
    {"nombre":"pablito","edad":44,"correo":"pablito@gmail.com","imgperfil":"url"}]

app.get("/api/aprendices", (req,res) => {
    res.json(listaAprendices)
})

app.get("/api/aprendices/:nombre", (req, res) => {
    const nombreBusqueda = req.params.nombre.toLowerCase();

    const aprendizEncontrado = listaAprendices.find(
        (aprendiz) => aprendiz.nombre.toLowerCase() === nombreBusqueda
    );

    res.json(aprendizEncontrado);
});

app.post('/aprendicescreado', (req, res) => {
    const { nombre, edad, correo, imgperfil } = req.body;
    
    if (typeof nombre !== 'string' || nombre.trim().length < 3) {
        return res.status(400).json({ "error": "El nombre como mínimo necesita 3 letras" });
    }
    
    if (typeof correo !== 'string' || !correo.includes('@')) {
        return res.status(400).json({ "error": "El correo necesita @" });
    }
    
    const datosAprendiz = { nombre, edad, correo, imgperfil };
    listaaprendices.push(datosAprendiz);
    
    return res.status(201).json({ "mensaje": "Aprendiz creado", "Datos": datosAprendiz });
});

app.post ("/api/aprendices2",(req,res) => {
    const datosAprendiz = req.body
    listaAprendices.push(datosAprendiz);
    res.status(201)
    res.json({"mensaje":"aprendiz creado","datos": datosAprendiz}) ;
});

app.listen(port, function()  {
    console.log(`SERVIDOR INICIADO: http://localhost:${port}`)
})