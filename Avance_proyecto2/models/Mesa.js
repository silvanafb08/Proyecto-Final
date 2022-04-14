const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mesaSchema = new Schema({

    MES_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    MES_NOMBRE:{
        type:String,
        trim:true
    },
    MES_NUMERO:{
        type:String,
        trim:true,
        unique:true
    },
    MES_CAN_SILLAS:{
        type:String,
        trim:true
    },
    MES_RESTAURANTE:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Mesa', mesaSchema);