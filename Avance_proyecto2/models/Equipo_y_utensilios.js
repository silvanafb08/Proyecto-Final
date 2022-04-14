const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Equipo_y_utensuliosSchema = new Schema({

    EQUI_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    EQUI_NOMBRE:{
        type:String,
        trim:true
    },
    EQUI_CANTIDAD:{
        type:String,
        trim:true
    },
    EQUI_RESTAURANTE:{
        type:String
    },
    EQUI_PRECIO:{
        type:String,
        trim:true
    },
    EQUI_MARCA:{
        type:String
    },
    EQUI_DESCRIPCION:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Equipo_y_utensilios', Equipo_y_utensuliosSchema);