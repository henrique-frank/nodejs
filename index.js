const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso', (req, res) =>{
    return res.json({curso: "Código da Aprovação!"})
})

server.listen(3000);