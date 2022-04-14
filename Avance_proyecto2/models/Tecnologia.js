const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tecnologiaSchema = new Schema({

    TEC_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    TEC_NOMBRE:{
        type:String,
        trim:true
    },
    TEC_CANTIDAD:{
        type:String
    },
    TEC_MARCA:{
        type:String
    },
    TEC_PRECIO:{
        type:String,
        trim:true
    },
    TEC_DESCRIPCION:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Tecnologia', tecnologiaSchema);