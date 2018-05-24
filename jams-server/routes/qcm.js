var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.qcm.create({
        nom: req.body.nom,
        id_professeur :req.body.id_professeur
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id_qcm/destroy', function(req, res) {
    models.qcm.destroy({
        where: {
            id_qcm: req.params.id_qcm
        }
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:nom/find', function(req, res) {
    models.qcm.destroy({
        attributes : id_qcm,
        where: {
            nom: req.params.nom
        }
    }).then(function() {
        res.redirect('/');
    });
});




module.exports = router;