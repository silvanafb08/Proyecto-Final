const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const empleadosSchema = new Schema({

    EMPL_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    EMPL_CEDULA:{
        type:String,
        trim:true,
        unique:true
    },
    EMPL_NOMBRE:{
        type:String,
        trim:true
    },
    EMPL_APELLIDO1:{
        type:String,
        trim:true
    },
    EMPL_APELLIDO2:{
        type:String,
        trim:true
    },
    EMPL_TEL:{
        type:String,
        trim:true
    },
    EMPL_TEL2:{
        type:String,
        trim:true
    },
    EMP_PUESTO:{
        type:String
    },
    EMP_NACIONALIDAD:{
        type:String,
        trim:true
    },
    EMPL_IMAGEN:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Empleado', empleadosSchema);