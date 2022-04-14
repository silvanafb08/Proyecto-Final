const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cajasSchema = new Schema({

    CAJA_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    CAJ_FECHA:{
        type:String,
        trim:true
    },
    CAJ_DESCRIPCION:{
        type:String
    },
    CAJ_ENTRADA:{
        type:String,
        trim:true,
    },
    CAJ_APERTURA:{
        type:String,
        trim:true
    },
    CAJ_CIERRE:{
        type:String,
        trim:true
    },
    CAJ_RESTAURANTE:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Caja', cajasSchema);