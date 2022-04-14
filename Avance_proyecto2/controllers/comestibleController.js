const Comestible = require('../models/Comestible');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const comestibles = await Comestible.find(); 
        res.json(comestibles);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const comestible = await Comestible.findById(id);
        if (comestible === null){
            res.status(400).json({
                mensaje:'El comestible no existe'
            });
            return;
        }
        res.json(comestible);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const comestible = new Comestible(req.body);
    try{
        await comestible.save();
        res.json({
            mensaje:'Se creo el comestible'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Comestible actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const comestible = await Comestible.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el comestible'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const comestible = await Comestible.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el comestible',
            comestible:comestible 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}