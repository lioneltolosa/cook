var express = require('express');
var app = express();

var Kitchen = require('../models/kitchen');

app.get('/', (req, res, next) => {

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

app.post('/', (req, res) => {

    var body = req.body;

    var kitchen = new Kitchen({
        name: body.name,
        image: body.image,
        assessment: body.assessment,
        information: body.information,
        difficulty: body.difficulty,
        time: body.time,
        ingredients: body.ingredients,
        steps: body.steps,
        tips: body.tips,
    });

    kitchen.save((err, kitchenGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear usuario',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            kitchen: kitchenGuardado
        });


    });

});

module.exports = app;




