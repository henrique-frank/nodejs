const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'JavaScript', 'ReactNative']

server.get('/cursos', (req, res)=> {
    return res.json(cursos)
})

// localhost:3000/cursos
server.get('/cursos/:index', (req, res) =>{
    const { index } = req.params
    return res.json({curso: `Código da Aprovação: aula ${cursos[index]}`})
})

server.post('/cursos', (req, res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos)
})

server.put('/cursos/:index', (req, res)=>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

server.delete('/cursos/:index', (req, res)=>{
    const {index} = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
})

server.listen(3000);