const Empleados = require('../models/Empleado');

exports.lista = async (req, res) => {  /* TRAER TODOS LOS DATOS */
    try {
        const empleados = await Empleados.find(); 
        res.json(empleados);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.seleccionado = async(req, res) => { /* TRAER POR ID */
    try {
        const id = req.params.id;
        const empleado = await Empleados.findById(id);
        if (empleado === null){
            res.status(400).json({
                mensaje:'El empleado no existe'
            });
            return;
        }
        res.json(empleado);
    } catch (error) { 
        res.status(400).send(error)
    }
};

exports.agregar = async(req, res)=>{  /* CREATE */
    const empleado = new Empleados(req.body);
    try{
        await empleado.save();
        res.json({
            mensaje:'Se creo el empleado'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.actualizar = async(req, res) => { /* UPDATE */
    try{
        console.log('Empleado actualizar::', req.params.id,req.body);
        const id = req.params.id;

        const empleado = await Empleados.findOneAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            }
        );
        res.json({
            mensaje:'Se actualizo el empleado'
        })
    } catch (error){
        res.status(400).send(error);
    }
};

exports.eliminar = async(req, res) => {     /*DELETE*/
    try {
        const id = req.params.id;
        const empleado = await Empleados.findOneAndDelete({_id:id});
        res.json({
            mensaje:'Se elimino el empleado',
            empleado:empleado 
        });
    } catch (error) {
        res.status(400).send(error);
    }
}