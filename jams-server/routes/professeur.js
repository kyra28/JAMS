var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.professeur.create({
        adresse: req.body.adresse,
        mdp: req.body.mdp
    }).then(function(d) {
        res.send({status :1});
    });
});

router.get('/verif', function(req, res) {
    models.professeur.findAll({
        attributes : ['id_professeur'],
        where:{
            adresse:req.params.adresse,
            mdp: req.params.mdp
        },
    }).then(function(data) {

        if(res.length == 0){
            //callback({"status":0, "error":"NOT_FOUND","professeur":null});
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
            //var professeur = {"id_professeur":res[0].get("id_professeur"), "username":res[0].get("adresse")}
            //callback({"status":1, "error":null, "professeur":professeur});
        }

    });
});

router.get('/all', function(req, res) {
    models.professeur.findAll({
        adresse:req.params.adresse,
        mdp: req.params.mdp
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

router.get('/:adresse', function(req, res) {
    models.professeur.findAll({
        where: {
            adresse: req.body.adresse
        }
    }).then(function(data) {
        res.setHeader('Content-Type','application/json');
        res.send(data.valueOf(adresse));
    });
});

module.exports = router;
