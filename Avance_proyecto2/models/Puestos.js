const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const puestosSchema = new Schema({

    PUEST_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    PUEST_TIPO:{
        type:String,
        trim:true
    },
    PUEST_ROL:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Puestos', puestosSchema);