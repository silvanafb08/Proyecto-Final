const Consecutivos = require('../models/Consecutivo');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const consecutivos = await Consecutivos.find(); 
        res.json(consecutivos);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const consecutivo = await Consecutivos.findById(id);
        if (consecutivo === null){
            res.status(400).json({
                mensaje:'El consecutivo no existe'
            });
            return;
        }
        res.json(consecutivo);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const consecutivo = new Consecutivos(req.body);
    try{
        await consecutivo.save();
        res.json({
            mensaje:'Se creo el consecutivo'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Consecutivo actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const consecutivo = await Consecutivos.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el consecutivo'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const consecutivo = await Consecutivos.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el consecutivo',
            consecutivo:consecutivo 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}