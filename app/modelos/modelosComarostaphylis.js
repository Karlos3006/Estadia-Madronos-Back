const mongoose = require('mongoose');

const ComarostaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    imagenes: {
        type: Object,
        require: true
    },
    habito: {
        type: String,
        require: true
    },
    margen: {
        type: String,
        require: true
    },
    inflorescencia: {
        type: String,
        require: true
    },
    peciolos_ramillas: {
        type: String,
        require: true
    },
    hojas: {
        type: String,
        require: true
    },
    haz: {
        type: String,
        require: true
    },
    enves: {
        type: String,
        require: true
    },
    flores: {
        type: String,
        require: true
    },
    ubicacion: {
        type: Object,
        require: true
    }

})

const comarostaphylis = mongoose.model('comarostaphylis', ComarostaSchema);
module.exports = comarostaphylis;