var models  = require('../server/models');
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

router.get('/:user_id/destroy', function(req, res) {
    models.User.destroy({
        where: {
            id_professeur: req.params.user_id
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;