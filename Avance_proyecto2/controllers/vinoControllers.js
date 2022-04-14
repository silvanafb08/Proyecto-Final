const Vinos = require('../models/Vino');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const vinos = await Vinos.find(); 
        res.json(vinos);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const vino = await Vinos.findById(id);
        if (vino === null){
            res.status(400).json({
                mensaje:'El vino no existe'
            });
            return;
        }
        res.json(vino);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const vino = new Vinos(req.body);
    try{
        await vino.save();
        res.json({
            mensaje:'Se creo el vino'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Vino actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const vino = await Vinos.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el vino'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const vino = await Vinos.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el vino',
            vino:vino 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}