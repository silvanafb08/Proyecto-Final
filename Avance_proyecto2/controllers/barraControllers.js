const Barras = require('../models/Barra');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const barras = await Barras.find(); 
        res.json(barras);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const barra = await Barras.findById(id);
        if (barra === null){
            res.status(400).json({
                mensaje:'La barra no existe'
            });
            return;
        }
        res.json(barra);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const barra = new Barras(req.body);
    try{
        await barra.save();
        res.json({
            mensje:'Se creo la barra'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Barra actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const barra = await Barras.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la barra'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const barra = await Barras.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la barra',
            barra:barra 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}