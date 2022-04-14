const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rolSchema = new Schema({

    ROL_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    ROL_NOMBRE:{
        type:String
    },
    ROL_DESCRIPCION:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Rol', rolSchema);