const Proveedores = require('../models/Proveedores');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const proveedores = await Proveedores.find(); 
        res.json(proveedores);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const proveedor = await Proveedores.findById(id);
        if (proveedor === null){
            res.status(400).json({
                mensaje:'El proveedor no existe'
            });
            return;
        }
        res.json(proveedor);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const proveedor = new Proveedores(req.body);
    try{
        await proveedor.save();
        res.json({
            mensaje:'Se creo el proveedor'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Proveedor actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const proveedor = await Proveedores.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el proveedor'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const proveedor = await Proveedores.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el proveedor',
            proveedor:proveedor 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}