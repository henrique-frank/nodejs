const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso/:id', (req, res) =>{
    const id = req.params.id
    return res.json({curso: `Código da Aprovação: ID ${id}`})
})

server.listen(3000);