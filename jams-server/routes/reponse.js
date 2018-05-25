var models  = require('../models');
var express = require('express');
var router  = express.Router();

//renvoyer une reponse à partir de l'id
router.get('/:id_reponse/reponse', function(req, res) {
    models.reponse.findAll({
        where: {
            id_reponse: req.params.id_reponse
        }}).then(function() {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});


router.get('/:id_reponse/destroy', function(req, res) {
    models.reponse.destroy({
        where: {
            id_reponse: req.params.id_question
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;