const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bitacorasSchema = new Schema({

    BIT_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    BIT_FECHA:{
        type:String,
        trim:true
    },
    BIT_DESCRIPCION:{
        type:String,
        trim:true,
        unique:true
    },
    BIT_DETALLE:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Bitacora', bitacorasSchema);