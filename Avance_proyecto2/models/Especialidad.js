const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const especialidadesSchema = new Schema({

    ESP_CODIGO:{
        type:String,
        trim:true,
        unique:true
    },
    ESP_NOMBRE:{
        type:String
    },
    ESP_INGREDIENTES:{
        type:String
    },
    ESP_PRECIO:{
        type:String,
        trim:true
    },
    ESP_DETALLE:{
        type:String
    }
});


mongoose.pluralize(null);
module.exports = mongoose.model('Especialidad', especialidadesSchema);