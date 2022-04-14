const Medidas = require('../models/Unidad_medida');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const medidas = await Medidas.find(); 
        res.json(medidas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const medida = await Medidas.findById(id);
        if (medida === null){
            res.status(400).json({
                mensaje:'La medida no existe'
            });
            return;
        }
        res.json(medida);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const medida = new Medidas(req.body);
    try{
        await medida.save();
        res.json({
            mensaje:'Se creo la medida'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Medida actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const medida = await Medidas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la medida'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const medida = await Medidas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la medida',
            medida:medida 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}