const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const buffetSchema = new Schema({

    BUFF_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    BUFF_NOMBRE:{
        type:String,
        unique:true
    },
    BUFF_PRECIO:{
        type:String,
        trim:true,
    },
    BUFF_TIPO:{
        type:String,
        trim:true
    },
    UNI_MED:{
        type:String,
        trim:true,
    },
    BUFF_IMAEN:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Buffet', buffetSchema);