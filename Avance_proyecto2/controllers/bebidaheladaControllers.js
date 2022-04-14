const Bebidas_heladas = require('../models/Bebida_helada');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const bebidas_heladas = await Bebidas_heladas.find(); 
        res.json(bebidas_heladas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const bebida_helada = await Bebidas_heladas.findById(id);
        if (bebida_helada === null){
            res.status(400).json({
                mensaje:'La bebida helada no existe'
            });
            return;
        }
        res.json(bebida_helada);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const bebida_helada = new Bebidas_heladas(req.body);
    try{
        await bebida_helada.save();
        res.json({
            mensaje:'Se creo la bebida helada'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Bebida helada actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const bebida_helada = await Bebidas_heladas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la bebida helada'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const bebida_helada = await Bebidas_heladas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la bebida helada',
            bebida_helada:bebida_helada 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}