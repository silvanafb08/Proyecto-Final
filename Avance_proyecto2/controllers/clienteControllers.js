const Clientes = require('../models/Cliente');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const clientes = await Clientes.find(); 
        res.json(clientes);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const cliente = await Clientes.findById(id);
        if (cliente === null){
            res.status(400).json({
                mensaje:'El cliente no existe'
            });
            return;
        }
        res.json(cliente);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const cliente = new Clientes(req.body);
    try{
        await cliente.save();
        res.json({
            mensaje:'Se creo el cliente'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Cliente actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const cliente = await Clientes.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el cliente'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const cliente = await Clientes.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el cliente',
            cliente:cliente 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}