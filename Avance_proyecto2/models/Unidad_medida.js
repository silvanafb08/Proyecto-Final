const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Unidad_medidaSchema = new Schema({

    UNI_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    UNI_MED:{
        type:String,
        trim:true
    },
    UNI_ESCALA:{
        type:String,
        trim:true
    },
    UNI_DETALLE:{
        type:String,
        trim:true,
    },
    UNI_SIMBOLO:{
        type:String,
        trim:true
    },
    UNI_SIMBOLOGIA:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Unidad_medida', Unidad_medidaSchema);