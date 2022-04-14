const Restaurantes = require('../models/Restaurante');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const restaurantes = await Restaurantes.find(); 
        res.json(restaurantes);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const restaurante = await Restaurantes.findById(id);
        if (restaurante === null){
            res.status(400).json({
                mensaje:'El restaurante no existe'
            });
            return;
        }
        res.json(restaurante);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const restaurante = new Restaurantes(req.body);
    try{
        await restaurante.save();
        res.json({
            mensaje:'Se creo el restaurante'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Restaurante actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const restaurante = await Restaurantes.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el restaurante'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const restaurante = await Restaurantes.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el restaurante',
            restaurante:restaurante 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}