var express = require('express');
var router = express.Router();

var Kitchen = require('../models/kitchen');

/* GET home page. */
// router.get('/kitchen', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/kitchen', (req, res, next) => {

    Kitchen.find({})
        .exec(
            (err, recetas) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando recetas',
                        errors: err
                    });
                }

                res.status(200).json({
                    ok: true,
                    recetas: recetas
                });
            });
});

module.exports = router;
