const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const desechablesSchema = new Schema({

    DESE_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    DESE_NOMBRE:{
        type:String,
        trim:true
    },
    DESE_CANTIDAD:{
        type:String,
        trim:true
    },
    DESE_RESTAURANTE:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Desechable', desechablesSchema);