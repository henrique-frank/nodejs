const express = require('express');

const server = express();

const cursos = ['NodeJS', 'JavaScript', 'ReactNative']

// localhost:3000/curso
server.get('/curso/:index', (req, res) =>{
    const { index } = req.params
    return res.json({curso: `Código da Aprovação: Aula ${cursos[index]}`})
})

server.listen(3000);