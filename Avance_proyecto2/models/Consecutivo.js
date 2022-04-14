const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const consecutivosSchema = new Schema({

    CONS_TIPO:{
        type:String,
        trim:true
    },
    CONS_DESCRIPCION:{
        type:String
    },
    CONS_VALOR:{
        type:String,
        trim:true
    },
    CONS_PREFIJO:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Consecutivo', consecutivosSchema);