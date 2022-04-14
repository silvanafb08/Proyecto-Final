const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const marcaSchema = new Schema({

    MAR_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    MAR_DESCRIPCION:{
        type:String
    },
    MAR_NACIONALIDAD:{
        type:String,
        trim:true
    },
    MAR_IMAGEN:{
        type:String
    },
    EMPRESA:{
        EMPRE_CEDULA:{
            type:String,
            trim:true,
            unique:true
        },
        EMPRE_NOMBRE:{
            type:String
        },
        EMPRE_TELEFONO:{
            type:String,
            trim:true
        },
        EMPRE_DETALLE:{
            type:String
        },
        EMPRE_DETALLE:{
            type:String
        }
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Marca', marcaSchema);