const Roles = require('../models/Rol');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const roles = await Roles.find(); 
        res.json(roles);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const rol = await Roles.findById(id);
        if (rol === null){
            res.status(400).json({
                mensaje:'El rol no existe'
            });
            return;
        }
        res.json(rol);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const rol = new Roles(req.body);
    try{
        await rol.save();
        res.json({
            mensaje:'Se creo el rol'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Rol actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const rol = await Roles.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el rol'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const rol = await Roles.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el restarolurante',
            rol:rol 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}