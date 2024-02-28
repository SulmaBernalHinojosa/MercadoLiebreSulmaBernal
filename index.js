const express = require('express');
const path = require('path');


const app = express();

const publicPath = path.resolve(__dirname, './public');
index.use( express.static(publicPath) );


const port = process.env.PORT || 3033;
index.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});

index.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});