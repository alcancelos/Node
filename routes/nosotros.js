var express = require('express');
var router = express.Router();
var alex = 'Alejandro Martín Cancelos'
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('nosotros', {
        title: 'OP Jurídico Contable',
        isNosotros: true
    });
});

module.exports = router;