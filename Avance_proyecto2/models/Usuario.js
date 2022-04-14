const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usuariosSchema = new Schema({

    USU_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    USU_NOMBRE:{
        type:String
    },
    USU_APELLIDO1:{
        type:String,
        trim:true
    },
    USU_APELLIDO2:{
        type:String,
        trim:true
    },
    USU_TELEF1:{
        type:String,
        trim:true
    },
    USU_TELEF2:{
        type:String,
        trim:true
    },
    USU_CONTRA:{
        type:String,
        trim:true
    },
    USU_SISTEMA:{
        
            type:Boolean
        },
        USU_SEGURIDAD:{
            type:Boolean
        },
        USU_RESTAURNATE:{
            type:Boolean
        },
        USU_CUENTAS:{
            type:Boolean
        },
    
    USU_LOGIN:{
            type:String,
            trim:true,
            unique:true,
            lowercase:true
        
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Usuario', usuariosSchema);