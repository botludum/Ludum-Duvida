// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API funcionando!',
       message: 'Testando rotas da api',
    });
});

// Import contact controller
var postSOController = require('../controllers/postSOController');

// Contact routes
router.route('/duvidas')
    .get(postSOController.index)
    .post(postSOController.new);

router.route('/duvidas/:duvida_id')
    .get(postSOController.view)
    
// Export API routes
module.exports = router;