const express = require('express'); // se inyecta la dependencia
const router = express.Router(); // generamos la instancia del router
const mongoose = require('../node_modules/mongoose'); // se inyecta la dependencia de mongoose

let Person = require('../models/person'); //inyecta dependencia del modelo person

//se agrega ruta persons => metodo GET
router.get('/persons', function (req, res, next) {
    Person.find(function (err, persons) {
        if(err) return next(err);
        res.json(persons);
    });
});

//exportar el router
module.exports = router;