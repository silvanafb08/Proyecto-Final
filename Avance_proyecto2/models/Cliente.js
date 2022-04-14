const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const clientesSchema = new Schema({

    CLIE_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    CLIE_NOMBRE:{
        type:String,
        trim:true
    },
    CLIE_MONTO:{
        type:String,
        trim:true
    },
    CLIE_DETALLE:{
        type:String,
        trim:true
    },
    CLIE_FECHA:{
        type:String,
        trim:true
    },
    CLIE_RESERVACION:{
        type:String,
        trim:true
    },
    CLIE_BARRA:{
        type:String,
        trim:true
    },
    CLIE_RESTAURANTE:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Cliente', clientesSchema);