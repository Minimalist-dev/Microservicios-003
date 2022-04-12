var express = require('express');
var router  = express.Router();
let sistema   = require('../s/l/sistema');

/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Sistema' });
//});

router.post('/', sistema.crear);
router.post('/pagina', sistema.paginacion);
router.post('/buscar', sistema.buscar);
router.get('/:id', sistema.obtener);
router.get('/editar/:id', sistema.editar);
router.get('/limite/:id', sistema.limite);
router.delete('/:id', sistema.eliminar);

module.exports = router;

