const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const proveedoresSchema = new Schema({

    PROV_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    PROV_NOMBRE:{
        type:String
    },
    PROV_APELLIDO1:{
        type:String,
        trim:true
    },
    PROV_APELLIDO2:{
        type:String,
        trim:true
    },
    PROV_TELEFONO:{
        type:String,
        trim:true
    },
    PROV_FAX:{
        type:String,
        trim:true
    },
    PROV_CELULAR:{
        type:String,
        trim:true
    },
    PROV_CEDULA:{
        type:String,
        trim:true,
        unique:true
    },
    PROV_CORREO:{
        type:String,
        trim:true
    },
    PROV_DIRECCION:{
        type:String
    },
    PROV_IMAGEN:{
        type:String
    },
    PROV_PRODUCTOS_REST:{
        type:String
    },
    PROV_PRODUCTOS_MANEJADOS:{
        type:String,
        trim:true
    },
    PROV_PRODUCTOS_MANEJADOS:{
        NOMBRE:{
            type:String,
            trim:true
        },
        TELEFONO:{
            type:String,
            trim:true
        },
        DIRECCION:{
            type:String,
            trim:true
        }
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Proveedores', proveedoresSchema);