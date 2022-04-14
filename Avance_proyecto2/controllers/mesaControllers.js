const Mesas = require('../models/Mesa');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const mesas = await Mesas.find(); 
        res.json(mesas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const mesa = await Mesas.findById(id);
        if (mesa === null){
            res.status(400).json({
                mensaje:'La mesa no existe'
            });
            return;
        }
        res.json(mesa);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const mesa = new Mesas(req.body);
    try{
        await mesa.save();
        res.json({
            mensaje:'Se creo la mesa'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Mesa actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const mesa = await Mesas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la mesa'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const mesa = await Mesas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la mesa',
            mesa:mesa 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}