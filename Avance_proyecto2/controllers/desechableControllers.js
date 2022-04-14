const Desechables = require('../models/Desechable');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const desechables = await Desechables.find(); 
        res.json(desechables);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const desechable = await Desechables.findById(id);
        if (desechable === null){
            res.status(400).json({
                mensaje:'El desechable no existe'
            });
            return;
        }
        res.json(desechable);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const desechable = new Desechables(req.body);
    try{
        await desechable.save();
        res.json({
            mensaje:'Se creo el desechable'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Desechable actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const desechable = await Desechables.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el desechable'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const desechable = await Desechables.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el desechable',
            desechable:desechable 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}