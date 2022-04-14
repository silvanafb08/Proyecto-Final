const Especialidades = require('../models/Especialidad');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const especialidades = await Especialidades.find(); 
        res.json(especialidades);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const especialidad = await Especialidades.findById(id);
        if (especialidad === null){
            res.status(400).json({
                mensaje:'La especialidad no existe'
            });
            return;
        }
        res.json(especialidad);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const especialidad = new Especialidades(req.body);
    try{
        await especialidad.save();
        res.json({
            mensaje:'Se creo la especialidad'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Especialidad actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const especialidad = await Especialidades.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la especialidad'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const especialidad = await Especialidades.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la especialidad',
            especialidad:especialidad 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}