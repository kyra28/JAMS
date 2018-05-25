var models  = require('../models');
var express = require('express');
var router  = express.Router();

//creer et ajouter une reponse a une question
router.post('/addreponse', function(req, res) {
    models.reponse.create({
        reponse: req.body.reponse,
        valeur: req.body.valeur,
        id_question : req.body.id_qcm
    }).then(function() {
        res.send({status :1});
    });
});

//renvoyer une question
router.get('/:id_question/findByIdQcm', function(req, res) {
    models.question.findAll({
        where: {
        id_question: req.params.id_question
    }}).then(function() {
        res.redirect('/');
    });
});

//supprimer une question
router.get('/:id_question/destroy', function(req, res) {
    models.question.findAll({
        where: {
            id_question: req.params.id_question
        }
    }).then(function() {
        res.redirect('/');
    });
});

//renvoie toutes les reponses d'une question
router.post('/reponses', function(req, res) {
    models.reponse.findAll({
        where:{
            id_question:req.body.id_question
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



module.exports = router;