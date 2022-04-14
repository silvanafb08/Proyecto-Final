const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const comestibleSchema = new Schema({

    COMEST_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    COMEST_NOMBRE:{
        type:String,
        trim:true,
        unique:true
    },
    COMEST_CANTIDAD:{
        type:String,
        trim:true
    },
    COMEST_RESTAURANTE:{
        type:String,
        trim:true
    },
    COMEST_TIPO:{
        type:String,
        trim:true
    },
    COMEST_MARCA:{
        type:String,
        trim:true
    },
    COMEST_CLASE:{
        type:String,
        trim:true
    },
    COMEST_LINEA_COMEST:{
        type:String,
        trim:true
    },
    COMEST_UNI_MED:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Comestible', comestibleSchema);