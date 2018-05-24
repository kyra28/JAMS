var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.etudiant.create({
        adresse: req.body.adresse,
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/all', function(req, res) {
    models.etudiant.findAll({
        adresse:req.params.adresse,
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_etu/destroy', function(req, res) {
    models.etudiant.destroy({
        where: {
            id_etudiant: req.params.id_etudiant
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;