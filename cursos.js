//cursos.js - Rotas de cursos//

var express =  require ('express');
var router = express.Router();

//Rotas para consulatar cursos//

router.get('/', function (req, res) {
    res.send('lista de cursos ')
});

//Rotas para cadastrar cursos//

router.post('/', function  (req, res) {
    res.send('Curso cadastrados ')
});

//Rota para consultar um aluno por id//

router.get('/doscentes', function  (req, res) {
    res.send('Lista de doscentes ')
});

module.exports = router

