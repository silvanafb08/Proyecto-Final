const Limpiezas = require('../models/Limpieza');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const limpiezas = await Limpiezas.find(); 
        res.json(limpiezas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const limpieza = await Limpiezas.findById(id);
        if (limpieza === null){
            res.status(400).json({
                mensaje:'La limpieza no existe'
            });
            return;
        }
        res.json(limpieza);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const limpieza = new Limpiezas(req.body);
    try{
        await limpieza.save();
        res.json({
            mensaje:'Se creo ela limpieza'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('limpieza actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const limpieza = await Limpiezas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la limpieza'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const limpieza = await Limpiezas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la limpieza',
            limpieza:limpieza 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}