var models  = require('../models');
var express = require('express');
var router  = express.Router();

//creer une session
router.post('/create', function(req, res) {
    models.qcm.create({
        nom: req.body.nom,
        date: req.body.date,
        cle: req.body.cle,
        id_qcm: req.body.id_qcm,
        id_classe: req.body.id_classe,
        id_professeur :req.body.id_professeur,

    }).then(function() {
        res.send({status :1});
    });
});

//supprimer une session
router.get('/:id_session/destroy', function(req, res) {
    models.qcm.destroy({
        where: {
            id_session: req.params.id_session
        }
    }).then(function() {
        res.send({status :1});
    });
});

//renvoie l'id du qcm à partir de son nom
router.get('/:id_session/find', function(req, res) {
    models.session.findAll({
        attributes : id_qcm,
        where: {
            id_session: req.params.id_session
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
router.get('/all', function(req, res) {
    models.session.findAll({
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});


//creer et ajouter un bilan a une session
router.post('/:id_professeur/bilan', function(req, res) {
    models.bilan_session.create({
        id_session: req.body.id_session,
        note: req.body.note,
        id_etudiant : req.body.id_etudiant
    }).then(function() {
        res.send({status :1});
    });
});


module.exports = router;