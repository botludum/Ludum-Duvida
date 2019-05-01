let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API funcionando!',
       message: 'Testando rotas da api',
    });
});

var postSOController = require('../controllers/postSOController');
var stackOverflowController = require('../controllers/StackOverflowAPIController');

router.route('/duvidas')
    .get(postSOController.index);

router.route('/duvidas/:duvida_id')
    .get(postSOController.view);

router.route('/duvidas/pesquisar/:pergunta')
    .get(stackOverflowController.pesquisa);

module.exports = router;
