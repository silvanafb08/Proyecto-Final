const Paises = require('../models/Pais');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const paises = await Paises.find(); 
        res.json(paises);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const pais = await Paises.findById(id);
        if (pais === null){
            res.status(400).json({
                mensaje:'El pais no existe'
            });
            return;
        }
        res.json(pais);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const pais = new Paises(req.body);
    try{
        await pais.save();
        res.json({
            mensaje:'Se creo el pais'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Pais actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const pais = await Paises.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el pais'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const pais = await Paises.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el pais',
            pais:pais 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}