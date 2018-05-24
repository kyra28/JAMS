var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.question.create({
        question: req.body.adresse,
        valeur: req.body.valeur,
        id_qcm : req.body.id_qcm
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_qcm/findByIdQcm', function(req, res) {
    models.question.findAll({
        where: {
        id_qcm: req.params.id_qcm
    }}).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_question/destroy', function(req, res) {
    models.question.findAll({
        where: {
            id_question: req.params.id_question
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;