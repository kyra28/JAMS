var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.etudiant.create({
        adresse: req.body.adresse,
    }).then(function() {
        res.setHeader('Content-Type','application/json');
        res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials',true);
        res.send({status :1});
    });
});

router.get('/all', function(req, res) {
    models.etudiant.findAll({
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
            res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
            res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials',true);
            res.send(data);
        }
    });
});

router.get('/:id_etudiant/destroy', function(req, res) {
    models.etudiant.destroy({
        where: {
            id_etudiant: req.params.id_etudiant
        }
    }).then(function() {
        es.send({status :1});
    });
});

//renvoie l'id d'un etudiant en connaissant son adresse
router.get('/:adresse/search1', function(req, res) {
    models.etudiant.findAll({
        attributes : ['id_classe'],
        where: {
            adresse: req.params.adresse
        }
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});

//renvoie l'adresse d'un etudiant en connaissant son id
router.get('/:id_classe/search2', function(req, res) {
    models.etudiant.findAll({
        attributes : ['adresse'],
        where: {
            id_classe: req.params.id_classe
        }
    }).then(function(data) {
        res.setHeader('Content-Type','application/json');

        res.send(data);
    });
});



module.exports = router;