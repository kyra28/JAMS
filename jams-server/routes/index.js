var models  = require('../server/models');
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
    res.render('index', {
        title: 'Sequelize: Express Example'
    });
});

module.exports = router;