const Cajas = require('../models/Caja');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const cajas = await Cajas.find(); 
        res.json(cajas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const caja = await Cajas.findById(id);
        if (caja === null){
            res.status(400).json({
                mensaje:'La caja no existe'
            });
            return;
        }
        res.json(caja);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const caja = new Cajas(req.body);
    try{
        await caja.save();
        res.json({
            mensaje:'Se creo la caja'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Caja actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const caja = await Cajas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'La caja se actualizo'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const caja = await Cajas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la caja',
            caja:caja 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}