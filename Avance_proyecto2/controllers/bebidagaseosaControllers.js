const Bebidas_calientes = require('../models/Bebida_caliente');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const bebidas_calientes = await Bebidas_calientes.find(); 
        res.json(bebidas_calientes);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const bebida_caliente = await Bebidas_calientes.findById(id);
        if (bebida_caliente === null){
            res.status(400).json({
                mensaje:'La bebida caliente no existe'
            });
            return;
        }
        res.json(bebida_caliente);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const bebida_caliente = new Bebidas_calientes(req.body);
    try{
        await bebida_caliente.save();
        res.json({
            mensaje:'Se creo la bebida caliente'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Bebida caliente actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const bebida_caliente = await Bebidas_calientes.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la bebida caliente'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const bebida_caliente = await Bebidas_calientes.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la bebida caliente',
            bebida_caliente:bebida_caliente 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}