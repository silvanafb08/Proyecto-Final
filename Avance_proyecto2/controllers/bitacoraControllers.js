const Bitacoras = require('../models/Bitacora');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const bitacoras = await Bitacoras.find(); 
        res.json(bitacoras);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const bitacora = await Bitacoras.findById(id);
        if (bitacora === null){
            res.status(400).json({
                mensaje:'La bitacora no existe'
            });
            return;
        }
        res.json(bitacora);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const bitacora = new Bitacoras(req.body);
    try{
        await bitacora.save();
        res.json({
            mensaje:'Se creo la bitacora'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Bitacora actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const bitacora = await Bitacoras.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la bitacora'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const bitacora = await Bitacoras.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la bitacora',
            bitacora:bitacora 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}