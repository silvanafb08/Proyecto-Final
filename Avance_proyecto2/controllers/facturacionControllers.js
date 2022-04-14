const Facturaciones = require('../models/Facturacion');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const facturaciones = await Facturaciones.find(); 
        res.json(facturaciones);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const facturacion = await Facturaciones.findById(id);
        if (facturacion === null){
            res.status(400).json({
                mensaje:'La facturacion no existe'
            });
            return;
        }
        res.json(facturacion);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const facturacion = new Facturaciones(req.body);
    try{
        await facturacion.save();
        res.json({
            mensaje:'Se creo la facturacion'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Facturacion actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const restaurante = await Facturaciones.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la facturacion'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const facturacion = await Facturaciones.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la facturacion',
            facturacion:facturacion 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}