const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FacturacionSchema = new Schema({

    FAC_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    FAC_FECHA:{
        type:String,
        trim:true
    },
    FAC_DESCRIPCION:{
        type:String
    },
    FAC_ENTR_DIN:{
        type:String,
        trim:true
    },
    FAC_APERTURA:{
        type:String,
        trim:true
    },
    FAC_CIERRE:{
        type:String,
        trim:true
    },
    FAC_RESTAURANTE:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Facturacion', FacturacionSchema);