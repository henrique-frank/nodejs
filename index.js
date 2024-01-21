const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'JavaScript', 'ReactNative']

server.use((req,res,next)=>{
    console.log(`url chamada: ${req.url}`);
    return next();
});

// Middleware para evitar erros no request
function checkCurso(req, res, next){
    if (!req.body.name){
        return res.status(400).json({ error: "Nome do curso é obrigatório"});
    }

    return next();
}

function checkIndex(req, res, next){
    const curso = cursos[req.params.index]
    if (!curso){
        return res.status(400).json({ error: "O curso não existe"});
    }

    req.curso = curso;

    return next();
}


server.get('/cursos', (req, res)=> {
    return res.json(cursos)
});

// localhost:3000/cursos
server.get('/cursos/:index', checkIndex, (req, res) =>{
    return res.json({curso: `Código da Aprovação: aula ${req.curso}`})
});

server.post('/cursos', checkCurso, (req, res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos)
})

server.put('/cursos/:index', checkCurso, checkIndex, (req, res)=>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

server.delete('/cursos/:index', checkIndex, (req, res)=>{
    const {index} = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
})

server.listen(3000);