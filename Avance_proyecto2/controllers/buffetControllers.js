const Buffets = require('../models/Buffet');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const buffets = await Buffets.find(); 
        res.json(buffets);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const buffet = await Buffets.findById(id);
        if (buffet === null){
            res.status(400).json({
                mensaje:'El buffet no existe'
            });
            return;
        }
        res.json(buffet);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const buffet = new Buffets(req.body);
    try{
        await buffet.save();
        res.json({
            mensaje:'Se creo el buffet'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Buffet actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const buffet = await Buffets.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el buffet'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const buffet = await Buffets.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el buffet',
            buffet:buffet 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}