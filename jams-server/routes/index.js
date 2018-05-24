var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    /*models.User.findAll({
        include: [ models.Task ]
    }).then(function(users) {
        res.render('index', {
            title: 'Sequelize: Express Example',
            users: users
        });
    });*/
    res.status(200).send({
        message: 'Welcome to the beginning of nothingness.'
    });
});

module.exports = router;