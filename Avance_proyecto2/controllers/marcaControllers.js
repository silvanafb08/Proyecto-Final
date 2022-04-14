const Marcas = require('../models/Marca');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const marcas = await Marcas.find(); 
        res.json(marcas);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const marca = await Marcas.findById(id);
        if (marca === null){
            res.status(400).json({
                mensaje:'La marca no existe'
            });
            return;
        }
        res.json(marca);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const marca = new Marcas(req.body);
    try{
        await marca.save();
        res.json({
            mensaje:'Se creo la marca'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Marca actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const marca = await Marcas.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la marca'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const marca = await Marcas.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino la marca',
            marca:marca 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}