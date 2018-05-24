var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.reponse.create({
        reponse: req.body.reponse,
        valeur: req.body.valeur,
        id_question : req.body.id_qcm
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_question/findByIdQcm', function(req, res) {
    models.reponse.findAll({
        where: {
            id_question: req.params.id_question
        }}).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_reponse/destroy', function(req, res) {
    models.reponse.destroy({
        where: {
            id_reponse: req.params.id_question
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;