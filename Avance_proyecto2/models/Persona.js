const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const personaSchema = new Schema({
    nombre:{
        type:String,
        trim:true,
    },
    apellidos:{
        type:String
    },
    correo:{
        type:String
    },
    celular:{
        type:String,
        trim:true
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Persona', personaSchema);

//LLAMA A LA COLECCION  TAL CUAL
// var collectionName = "Persona"
// module.exports = mongoose.model('Persona', personaSchema, collectionName);

//PERO PARA MEJORES PRACTICAS COLOCAR mongoose.pluralize(null);