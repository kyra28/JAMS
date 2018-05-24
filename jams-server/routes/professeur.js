var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.professeur.create({
        adresse: req.body.adresse,
        mdp: req.body.mdp
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/all', function(req, res) {
    models.professeur.findAll({
        attributes : ['id_professeur']
    }).then(function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({status: "success", data: data});
    });
});

router.get('/:user_id/destroy', function(req, res) {
    models.professeur.destroy({
        where: {
            id_professeur: req.params.user_id
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;