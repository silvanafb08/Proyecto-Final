const Equipos = require('../models/Equipo_y_utensilios');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const equipos = await Equipos.find(); 
        res.json(equipos);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const equipo = await Equipos.findById(id);
        if (equipo === null){
            res.status(400).json({
                mensaje:'El equipo no existe'
            });
            return;
        }
        res.json(equipo);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const equipo = new Equipos(req.body);
    try{
        await equipo.save();
        res.json({
            mensaje:'Se creo el equipo'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('equipo actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const equipo = await Equipos.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el equipo'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const equipo = await Equipos.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el equipo',
            equipo:equipo 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}