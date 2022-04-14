const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const limpiezaSchema = new Schema({

    LIMP_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    LIMP_NOMBRE:{
        type:String
    },
    LIMP_CANTIDAD:{
        type:String,
        trim:true
    },
    LIMP_RESTAURANTE:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Limpieza', limpiezaSchema);