var models  = require('../models');
var express = require('express');
var router  = express.Router();

//creer un qcm
router.post('/create', function(req, res) {
    models.qcm.create({
        nom: req.body.nom,
        id_professeur :req.body.id_professeur
    }).then(function() {
        res.send({status :1});
    });
});

//supprimer un qcm
router.get('/:id_qcm/destroy', function(req, res) {
    models.qcm.destroy({
        where: {
            id_qcm: req.params.id_qcm
        }
    }).then(function() {
        res.send({status :1});
    });
});

//renvoie l'id du qcm à partir de son nom
router.get('/:nom/find', function(req, res) {
    models.qcm.findAll({
        attributes : id_qcm,
        where: {
            nom: req.params.nom
        }
    }).then(function() {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});

//renvoie tous les qcm
router.get('/:id_professeur/all', function(req, res) {
    models.qcm.findAll({
    }).then(function(data) {
        where: {
            id_professeur: req.params.id_professeur
        }
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



router.get('/all2', function(req, res) {
    models.qcm.findAll({
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

//renvoie toutes les questions d'un qcm
router.get('/:id_qcm/questions', function(req, res) {
    models.question.findAll({
        where:{
            id_qcm:req.params.id_qcm
        },
    }).then(function(data) {

        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});

//creer et ajouter une question a un qcm
router.post('/addquestion', function(req, res) {
    models.question.create({
        question: req.body.adresse,
        valeur: req.body.valeur,
        id_qcm : req.body.id_qcm
    }).then(function() {
        res.send({status :1});
    });
});


module.exports = router;