const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paisSchema = new Schema({

    PAIS_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    PAIS_NOMBRE:{
        type:String,
        trim:true
    },
    PAIS_IMAGEN:{
        type:String
    },
    PAIS_NACIONALIDAD:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Pais', paisSchema);