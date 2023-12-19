const express = require('express');
const cursos = require('./cursos');

const app = express();
app.use('/cursos', cursos);

const listaCursos = ['Informática', 'Eletrotécnica', 'Administração']

app.get('/', function(req, res) {
    //res.sendFile(__dirname + '/index.html')
    res.render('index', {cursos: listaCursos});
    //res.send('Pagina principal');
});

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
