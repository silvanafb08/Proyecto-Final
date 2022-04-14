const Puestos = require('../models/Puestos');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const puestos = await Puestos.find(); 
        res.json(puestos);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const puesto = await Puestos.findById(id);
        if (puesto === null){
            res.status(400).json({
                mensaje:'El puesto no existe'
            });
            return;
        }
        res.json(puesto);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const puesto = new Puestos(req.body);
    try{
        await restapuestourante.save();
        res.json({
            mensaje:'Se creo el puesto'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Puesto actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const puesto = await Puestos.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el puesto'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const puesto = await Puestos.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el puesto',
            puesto:puesto 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}