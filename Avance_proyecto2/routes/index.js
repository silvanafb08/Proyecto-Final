const express = require('express');
const router = express.Router();

const personaController = require('../controllers/personaControllers');
const barraController = require('../controllers/barraControllers');
const bebida_calienteController = require('../controllers/bebidacalienteControllers');
const bebida_heladaController = require('../controllers/bebidaheladaControllers');
const bebida_gaseosaController = require('../controllers/bebidagaseosaControllers');
const licorController = require('../controllers/licorControllers');
const vinoController = require('../controllers/vinoControllers');
const bitacoraController = require('../controllers/bitacoraControllers');
const buffetController = require('../controllers/buffetControllers');
const cajaController = require('../controllers/cajaControllers');
const clienteController = require('../controllers/clienteControllers');
const comestibleController = require('../controllers/comestibleController');
const consecutivoController = require('../controllers/consecutivoControllers');
const desechableController = require('../controllers/desechableControllers');
const empleadoController = require('../controllers/empleadoController');
const equipo_utensiliosController = require('../controllers/equipo_y_utensiliosControllers');
const especialidadesController = require('../controllers/especialidadControllers');
const facturacionController = require('../controllers/facturacionControllers');
const limpiezaController = require('../controllers/limpiezaControllers');
const marcaController = require('../controllers/marcaControllers');
const mesaController = require('../controllers/mesaControllers');
const paisController = require('../controllers/paisControllers');
const proveedorController = require('../controllers/proveedorControllers');
const puestoController = require('../controllers/puestoControllers');
const rolController = require('../controllers/rolControllers');
const tecnologiaController = require('../controllers/tecnologiaControllers');
const medidaController = require('../controllers/unidad_medidaControllers');
const usuarioController = require('../controllers/usuarioControllers');
const restauranteController = require('../controllers/restauranteControllers');


module.exports = function () {

    //PERSONA
    router.get('/persona/', personaController.lista);
    router.get('/persona/:id', personaController.seleccionado);
    router.post('/persona', personaController.agregar);
    router.put('/persona/:id', personaController.actualizar);
    router.delete('/persona/:id', personaController.eliminar);


    //* → → → → → → → → → → BARRA ← ← ← ← ← ← ← ← ← *//
    router.get('/barra/', barraController.lista);
    router.get('/barra/:id', barraController.seleccionado);
    router.post('/barra', barraController.agregar);
    router.put('/barra/:id', barraController.actualizar);
    router.delete('/barra/:id', barraController.eliminar);


    //* → → → → → → → → → → BEBIDA CALIENTE ← ← ← ← ← ← ← ← ← *//
    router.get('/bebida_caliente/', bebida_calienteController.lista);
    router.get('/bebida_caliente/:id', bebida_calienteController.seleccionado);
    router.post('/bebida_caliente', bebida_calienteController.agregar);
    router.put('/bebida_caliente/:id', bebida_calienteController.actualizar);
    router.delete('/bebida_caliente/:id', bebida_calienteController.eliminar);


    //* → → → → → → → → → → BEBIDA HELADA ← ← ← ← ← ← ← ← ← *//
    router.get('/bebida_helada/', bebida_heladaController.lista);
    router.get('/bebida_helada/:id', bebida_heladaController.seleccionado);
    router.post('/bebida_helada', bebida_heladaController.agregar);
    router.put('/bebida_helada/:id', bebida_heladaController.actualizar);
    router.delete('/bebida_helada/:id', bebida_heladaController.eliminar);


    //* → → → → → → → → → → BEBIDA GASEOSA ← ← ← ← ← ← ← ← ← *//
    router.get('/bebida_gaseosa/', bebida_gaseosaController.lista);
    router.get('/bebida_gaseosa/:id', bebida_gaseosaController.seleccionado);
    router.post('/bebida_gaseosa', bebida_gaseosaController.agregar);
    router.put('/bebida_gaseosa/:id', bebida_gaseosaController.actualizar);
    router.delete('/bebida_gaseosa/:id', bebida_gaseosaController.eliminar);
 
  
    //* → → → → → → → → → → LICOR ← ← ← ← ← ← ← ← ← *//
    router.get('/licor/', licorController.lista);
    router.get('/licor/:id', licorController.seleccionado);
    router.post('/licor', licorController.agregar);
    router.put('/licor/:id', licorController.actualizar);
    router.delete('/licor/:id', licorController.eliminar);


    //* → → → → → → → → → → VINO ← ← ← ← ← ← ← ← ← *//
    router.get('/vino/', vinoController.lista);
    router.get('/vino/:id', vinoController.seleccionado);
    router.post('/vino', vinoController.agregar);
    router.put('/vino/:id', vinoController.actualizar);
    router.delete('/vino/:id', vinoController.eliminar);


    //* → → → → → → → → → → BITACORA ← ← ← ← ← ← ← ← ← *//
    router.get('/bitacora/', bitacoraController.lista);
    router.get('/bitacora/:id', bitacoraController.seleccionado);
    router.post('/bitacora', bitacoraController.agregar);
    router.put('/bitacora/:id', bitacoraController.actualizar);
    router.delete('/bitacora/:id', bitacoraController.eliminar);


    //* → → → → → → → → → → BUFFET ← ← ← ← ← ← ← ← ← *//
    router.get('/buffet/', buffetController.lista);
    router.get('/buffet/:id', buffetController.seleccionado);
    router.post('/buffet', buffetController.agregar);
    router.put('/buffet/:id', buffetController.actualizar);
    router.delete('/buffet/:id', buffetController.eliminar);


    //* → → → → → → → → → → CAJA ← ← ← ← ← ← ← ← ← *//
    router.get('/caja/', cajaController.lista);
    router.get('/caja/:id', cajaController.seleccionado);
    router.post('/caja', cajaController.agregar);
    router.put('/caja/:id', cajaController.actualizar);
    router.delete('/caja/:id', cajaController.eliminar);


    //* → → → → → → → → → → CLIENTE ← ← ← ← ← ← ← ← ← *//
    router.get('/cliente/', clienteController.lista);
    router.get('/cliente/:id', clienteController.seleccionado);
    router.post('/cliente', clienteController.agregar);
    router.put('/cliente/:id', clienteController.actualizar);
    router.delete('/cliente/:id', clienteController.eliminar);


    //* → → → → → → → → → → COMESTIBLE ← ← ← ← ← ← ← ← ← *//
    router.get('/comestible/', comestibleController.lista);
    router.get('/comestible/:id', comestibleController.seleccionado);
    router.post('/comestible', comestibleController.agregar);
    router.put('/comestible/:id', comestibleController.actualizar);
    router.delete('/comestible/:id', comestibleController.eliminar);


    //* → → → → → → → → → → CONSECUTIVO ← ← ← ← ← ← ← ← ← *//
    router.get('/consecutivo/', consecutivoController.lista);
    router.get('/consecutivo/:id', consecutivoController.seleccionado);
    router.post('/consecutivo', consecutivoController.agregar);
    router.put('/consecutivo/:id', consecutivoController.actualizar);
    router.delete('/consecutivo/:id', consecutivoController.eliminar);


    //* → → → → → → → → → → DESECHABLE ← ← ← ← ← ← ← ← ← *//
    router.get('/desechable/', desechableController.lista);
    router.get('/desechable/:id', desechableController.seleccionado);
    router.post('/desechable', desechableController.agregar);
    router.put('/desechable/:id', desechableController.actualizar);
    router.delete('/desechable/:id', desechableController.eliminar);


    //* → → → → → → → → → → EMPLEADO ← ← ← ← ← ← ← ← ← *//
    router.get('/empleado/', empleadoController.lista);
    router.get('/empleado/:id', empleadoController.seleccionado);
    router.post('/empleado', empleadoController.agregar);
    router.put('/empleado/:id', empleadoController.actualizar);
    router.delete('/empleado/:id', empleadoController.eliminar);


    //* → → → → → → → → → → EQUIPO Y UTENSILIOS ← ← ← ← ← ← ← ← ← *//
    router.get('/equipo_utensilios/', equipo_utensiliosController.lista);
    router.get('/equipo_utensilios/:id', equipo_utensiliosController.seleccionado);
    router.post('/equipo_utensilios', equipo_utensiliosController.agregar);
    router.put('/equipo_utensilios/:id', equipo_utensiliosController.actualizar);
    router.delete('/equipo_utensilios/:id', equipo_utensiliosController.eliminar);


    //* → → → → → → → → → → ESPECIALIDAD ← ← ← ← ← ← ← ← ← *//
    router.get('/especialidades/', especialidadesController.lista);
    router.get('/especialidades/:id', especialidadesController.seleccionado);
    router.post('/especialidades', especialidadesController.agregar);
    router.put('/especialidades/:id', especialidadesController.actualizar);
    router.delete('/especialidades/:id', especialidadesController.eliminar);


    //* → → → → → → → → → → FACTURACION ← ← ← ← ← ← ← ← ← *//
    router.get('/facturacion/', facturacionController.lista);
    router.get('/facturacion/:id', facturacionController.seleccionado);
    router.post('/facturacion', facturacionController.agregar);
    router.put('/facturacion/:id', facturacionController.actualizar);
    router.delete('/facturacion/:id', facturacionController.eliminar);


    //* → → → → → → → → → → LIMPIEZA ← ← ← ← ← ← ← ← ← *//
    router.get('/limpieza/', limpiezaController.lista);
    router.get('/limpieza/:id', limpiezaController.seleccionado);
    router.post('/limpieza', limpiezaController.agregar);
    router.put('/limpieza/:id', limpiezaController.actualizar);
    router.delete('/limpieza/:id', limpiezaController.eliminar);


    //* → → → → → → → → → → MARCA ← ← ← ← ← ← ← ← ← *//
    router.get('/marca/', marcaController.lista);
    router.get('/marca/:id', marcaController.seleccionado);
    router.post('/marca', marcaController.agregar);
    router.put('/marca/:id', marcaController.actualizar);
    router.delete('/marca/:id', marcaController.eliminar);


    //* → → → → → → → → → → MESA ← ← ← ← ← ← ← ← ← *//
    router.get('/mesa/', mesaController.lista);
    router.get('/mesa/:id', mesaController.seleccionado);
    router.post('/mesa', mesaController.agregar);
    router.put('/mesa/:id', mesaController.actualizar);
    router.delete('/mesa/:id', mesaController.eliminar);


    //* → → → → → → → → → → PAIS ← ← ← ← ← ← ← ← ← *//
    router.get('/pais/', paisController.lista);
    router.get('/pais/:id', paisController.seleccionado);
    router.post('/pais', paisController.agregar);
    router.put('/pais/:id', paisController.actualizar);
    router.delete('/pais/:id', paisController.eliminar);


    //* → → → → → → → → → → PROVEEDOR ← ← ← ← ← ← ← ← ← *//
    router.get('/proveedor/', proveedorController.lista);
    router.get('/proveedor/:id', proveedorController.seleccionado);
    router.post('/proveedor', proveedorController.agregar);
    router.put('/proveedor/:id', proveedorController.actualizar);
    router.delete('/proveedor/:id', proveedorController.eliminar);


    //* → → → → → → → → → → PUESTO ← ← ← ← ← ← ← ← ← *//
    router.get('/puesto/', puestoController.lista);
    router.get('/puesto/:id', puestoController.seleccionado);
    router.post('/puesto', puestoController.agregar);
    router.put('/puesto/:id', puestoController.actualizar);
    router.delete('/puesto/:id', puestoController.eliminar);


    //* → → → → → → → → → → RESTAURANTE ← ← ← ← ← ← ← ← ← *//
    router.get('/restaurante/', restauranteController.lista);
    router.get('/restaurante/:id', restauranteController.seleccionado);
    router.post('/restaurante', restauranteController.agregar);
    router.put('/restaurante/:id', restauranteController.actualizar);
    router.delete('/restaurante/:id', restauranteController.eliminar);


    //* → → → → → → → → → → ROL ← ← ← ← ← ← ← ← ← *//
    router.get('/rol/', rolController.lista);
    router.get('/rol/:id', rolController.seleccionado);
    router.post('/rol', rolController.agregar);
    router.put('/rol/:id', rolController.actualizar);
    router.delete('/rol/:id', rolController.eliminar);


    //* → → → → → → → → → → TECNOLOGIA ← ← ← ← ← ← ← ← ← *//
    router.get('/tecnologia/', tecnologiaController.lista);
    router.get('/tecnologia/:id', tecnologiaController.seleccionado);
    router.post('/tecnologia', tecnologiaController.agregar);
    router.put('/tecnologia/:id', tecnologiaController.actualizar);
    router.delete('/tecnologia/:id', tecnologiaController.eliminar);


    //* → → → → → → → → → → UNIDAD MEDIDA ← ← ← ← ← ← ← ← ← *//
    router.get('/unidad_medida/', medidaController.lista);
    router.get('/unidad_medida/:id', medidaController.seleccionado);
    router.post('/unidad_medida', medidaController.agregar);
    router.put('/unidad_medida/:id', medidaController.actualizar);
    router.delete('/unidad_medida/:id', medidaController.eliminar);


    //* → → → → → → → → → → USUARIO ← ← ← ← ← ← ← ← ← *//
    router.get('/usuario/', usuarioController.lista);
    router.get('/usuario/:id', usuarioController.seleccionado);
    router.post('/usuario', usuarioController.agregar);
    router.put('/usuario/:id', usuarioController.actualizar);
    router.delete('/usuario/:id', usuarioController.eliminar);


    return router;
}


