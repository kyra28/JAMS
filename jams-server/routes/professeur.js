var models  = require('../models');
var express = require('express');
var router  = express.Router();

//Tests avec get
router.get('/:adresse/:mdp/create', function(req, res) {
    models.professeur.create({
        adresse: req.params.adresse,
        mdp: req.params.mdp
    }).then(function() {
        res.send({status :1});
    });
});

router.get('/:adresse/:mdp/verif', function(req, res) {
    models.professeur.findAll({
        attributes : ['id_professeur'],
        where:{
            adresse:req.params.adresse,
            mdp: req.params.mdp
        },
    }).then(function(data) {

        if(data.length == 0){
            //callback({"status":0, "error":"NOT_FOUND","professeur":null});
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});


router.post('/create', function(req, res) {
    models.professeur.create({
        adresse: req.body.adresse,
        mdp: req.body.mdp
    }).then(function() {
        res.send({status :1});
    });
});

router.post('/verif', function(req, res) {
    models.professeur.findAll({
        attributes : ['id_professeur'],
        where:{
            adresse:req.body.adresse,
            mdp: req.body.mdp
        },
    }).then(function(data) {

        if(data.length == 0){
            //callback({"status":0, "error":"NOT_FOUND","professeur":null});
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});

router.get('/all', function(req, res) {
    models.professeur.findAll({
        attributes: ["id_professeur","adresse"]
    }).then(function(data) {
        res.setHeader('Content-Type','application/json');
        res.send(data);
    });
});

router.get('/:id_professeur/destroy', function(req, res) {
    models.professeur.destroy({
        where: {
            id_professeur: req.params.id_professeur
        }
    }).then(function() {
        res.send({status :1});
    });
});

router.get('/:adresse/search', function(req, res) {
    models.professeur.findAll({
        attributes : ['id_professeur'],
        where: {
            adresse: req.params.adresse
        }
    }).then(function(data) {
        res.setHeader('Content-Type','application/json');
        res.send(data);
    });
});

module.exports = router;
