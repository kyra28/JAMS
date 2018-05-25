var models  = require('../models');
var express = require('express');
var router  = express.Router();

//test avec get
/*
router.get('/:id_classe/etudiants/', function(req, res) {
    models.etudiant_classe.findAll({
        attributes : ['id_etudiant'],
        where:{
            id_classe:req.params.id_classe
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

router.get('/:id_classe/:id_etudiant/add', function(req, res) {
    models.classe.create({
        id_classe: req.params.id_classe,
        id_etudiant: req.params.id_etudiant
    }).then(function() {
        res.send({status :1});
    });
});

*/

router.post('/create', function(req, res) {
    models.classe.create({
        nom: req.body.nom
    }).then(function() {
        res.send({status :1});
    });
});

//renvoie tous les etudiant d'une classe
router.post('/etudiants', function(req, res) {
    models.etudiant_classe.findAll({
        attributes : ['id_etudiant'],
        where:{
            id_classe:req.body.id_classe
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

//ajouter un étudiant à une classe
router.get('/:id_classe/:id_etudiant/add', function(req, res) {
    models.classe.create({
        id_classe: req.params.id_classe,
        id_etudiant: req.params.id_etudiant
    }).then(function() {
        res.send({status :1});
    });
});

//vérifier si un étudiant appartient à une classe
router.get('/:id_classe/:id_etudiant/exist', function(req, res) {
    models.etudiant_classe.findAll({
        where:{
            id_classe:req.params.id_classe,
            id_etudiant: req.params.id_etudiant
        },
    }).then(function(data) {

        if(data.length == 0){
            res.send({status :0});
        } else{
            res.send({status :1});
        }
    });
});

//renvoie toutes les classes
router.get('/all', function(req, res) {
    models.classe.findAll({
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});


//delete
router.get('/:id_classe/destroy', function(req, res) {
    models.classe.destroy({
        where: {
            id_classe: req.params.id_professeur
        }
    }).then(function() {
        res.send({status :1});
    });
});

//renvoie le nom d'une classe en connaissant l'id de la classe
router.get('/:id_classe/search1', function(req, res) {
    models.classe.findAll({
        attributes : ['nom'],
        where: {
            id_classe: req.params.id_classe
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

//renvoie l'id d'une classe en connaissant le nom de la classe
router.get('/:nom/search2', function(req, res) {
    models.classe.findAll({
        attributes : ['id_classe'],
        where: {
            nom: req.params.nom
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


module.exports = router;
