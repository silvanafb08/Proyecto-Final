const Bebidas_gaseosas = require('../models/Bebida_gaseosa');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const bebidas_gaseosas = await Bebidas_gaseosas.find(); 
        res.json(bebidas_gaseosas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const bebida_gaseosa = await Bebidas_gaseosas.findById(id);
        if (bebida_gaseosa === null){
            res.status(400).json({
                mensaje:'La bebida gaseosa no existe'
            });
            return;
        }
        res.json(bebida_gaseosa);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const bebida_gaseosa = new Bebidas_gaseosas(req.body);
    try{
        await bebida_gaseosa.save();
        res.json({
            mensaje:'Se creo la bebida gaseosa'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Bebida gaseosa actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const bebida_gaseosa = await Bebidas_gaseosas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la bebida gaseosa'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const bebida_gaseosa = await Bebidas_gaseosas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la bebida gaseosa',
            bebida_gaseosa:bebida_gaseosa 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}