const Personas = require('../models/Persona');


/* TRAER UNA LISTA DE TODOS */
exports.lista = async (req, res)=>{
    try {
        const personas = await Personas.find();
        res.json(personas);
    } catch (error) {
        res.status(400).send(error)
    }
}


/* TRAER SOLO UN OBJETO POR EL "ID" */
exports.seleccionado = async (req, res)=>{
    try {
        const id = req.params.id;
        const persona = await Personas.findById(id);
        if (persona === null){
            res.status(400).json({
                mensaje: 'La persona no existe'
            });
            return;
        }
        res.json(persona);
    } catch (error) {
        res.status(400).send(error) 
    }
}


/*CREAR UN OBJETO*/
exports.agregar = async(req, res)=> {
    const persona = new Personas(req.body);
    try {
        await persona.save();
        res.json({
            mensaje:'Se creo la persona'
        })  
    } catch (error) {
        res.status(400).send(error);
    }
};  


/*MODIFICAR-ACUTALIZAR UN OBJETO*/
exports.actualizar = async(req, res)=> {
    try {
        console.log('Persona actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const persona = await Personas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la persona'
        });
    } catch (error) {
        res.status(400).send(error);
    }
}


/*ELIMINAR UN OBJETO*/
exports.eliminar = async(req, res)=> {
    try {
        const id = req.params.id;
        const persona = await Personas.findOneAndDelete({_id:id});
        res.json({
            mensaje: 'Se elimino la persona',
            persona:persona
        });
    } catch (error) {
        res.status(400).send(error);
    }
}
