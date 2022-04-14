const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const restaurantesSchema = new Schema({

    RES_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    RES_NOMBRE:{
        type:String,
        trim:true,
        unique:true
    },
    RES_DIRECCION:{
        type:String,
        trim:true,
        unique:true
    },
    RES_CANT_CLIENTES:{
        type:String,
        trim:true
    },
    REST_TELEFONO:{
        type:String,
        trim:true,
        unique:true
    },
    RES_ESPECIALIDAD:{
        type:String,
        trim:true
    },
    RES_CANT_MESA:{
        type:String,
        trim:true
    },
    REST_CANT_BARRA:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Restaurante', restaurantesSchema);