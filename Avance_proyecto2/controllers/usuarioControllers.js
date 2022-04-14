const Usuarios = require('../models/Usuario');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const usuarios = await Usuarios.find(); 
        res.json(usuarios);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const usuario = await Usuarios.findById(id);
        if (usuario === null){
            res.status(400).json({
                mensaje:'El usuario no existe'
            });
            return;
        }
        res.json(usuario);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const usuario = new Usuarios(req.body);
    try{
        await usuario.save();
        res.json({
            mensaje:'Se creo el usuario'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Usuario actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const usuario = await Usuarios.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el usuario'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const usuario = await Usuarios.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el usuario',
            usuario:usuario 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}