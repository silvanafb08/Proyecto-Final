const Tecnologias = require('../models/Tecnologia');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const tecnologias = await Tecnologias.find(); 
        res.json(tecnologias);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const tecnologia = await Tecnologias.findById(id);
        if (tecnologia === null){
            res.status(400).json({
                mensaje:'La tecnologia no existe'
            });
            return;
        }
        res.json(tecnologia);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const tecnologia = new Tecnologias(req.body);
    try{
        await tecnologia.save();
        res.json({
            mensaje:'Se creo una tecnologia'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Tecnologia actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const tecnologia = await Tecnologias.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo la tecnologia'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const tecnologia = await Tecnologias.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino una tecnologia',
            tecnologia:tecnologia 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}