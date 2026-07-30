import express from 'express';
import 'dotenv/config';

const app = express();
const puerto = process.env.PORT || 3030;

// Configuración
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const saludo = 'Hola, estamos aprendiendo Express con la ficha 3407184';

app.get("/", (_, res) => {
    res.send(saludo);
});

app.get("/productos", (req, res) => {
    res.send(`
        <h1>Lista de productos</h1>
        <ol>
            <li>Televisor</li>
            <li>Celular</li>
            <li>Impresora</li>
        </ol>
    `);
});

app.get("/productos/:name/:id/:precio", (req, res) => {
    const producto = req.params.name;
    const id_producto = req.params.id;
    const precio_producto = req.params.precio;

    res.send(`
        <h1>Información del producto</h1>
        <ol>
            <li>Producto: ${producto}</li>
            <li>Id: ${id_producto}</li>
            <li>Precio: ${precio_producto}</li>
        </ol>
    `);
});

app.get("/saludo/:name", (req, res) => {
    const nombre = req.params.name;
    res.send(`Hola ${nombre}`);
});

app.get("/category/:Category/:id", (req, res) => {
    const categoria_producto = req.params.Category;
    const id_categoria = req.params.id;

    res.send(`
        <h1>Productos por categoría</h1>
        <ol>
            <li>Categoría: ${categoria_producto}</li>
            <li>Id: ${id_categoria}</li>
        </ol>
    `);
});

app.listen(puerto, () => {
    console.log(`Servidor funcionando en el puerto: ${puerto}`);
});