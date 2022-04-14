const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const barraSchema = new Schema({

    BARRA_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    BARRA_ESTADO:{
        type:String,
        trim:true
    }
});

mongoose.pluralize(null);
module.exports = mongoose.model('Barra', barraSchema);