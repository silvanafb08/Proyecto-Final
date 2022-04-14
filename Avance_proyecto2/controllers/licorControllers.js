const Licor = require('../models/Licor');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const licores = await Licor.find(); 
        res.json(licores);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const licor = await Licor.findById(id);
        if (licor === null){
            res.status(400).json({
                mensaje:'El licor no existe'
            });
            return;
        }
        res.json(licor);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const licor = new Licor(req.body);
    try{
        await licor.save();
        res.json({
            mensaje:'Se creo el licor'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Licor actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const licor = await Licor.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el licor'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const licor = await Licor.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el licor',
            licor:licor 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}