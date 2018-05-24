var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.classe.create({
        nom: req.body.nom,
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/all', function(req, res) {
    models.classe.findAll({
        nom:req.params.nom,
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_classe/destroy', function(req, res) {
    models.classe.destroy({
        where: {
            id_classe: req.params.id_classe
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;