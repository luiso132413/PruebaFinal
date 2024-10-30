
let express = require('express');
let router = express.Router();
 
const cliente = require('../controllers/cliente.controllers.js');
const producto = require('../controllers/producto.controllers.js');
const factura = require('../controllers/factura.controllers.js');
const ptarjeta = require('../controllers/ptarjeta.controllers.js');

// Rutas de los clientes
router.post('/api/cliente/create', cliente.create);
router.get('/api/cliente/all', cliente.retrieveAll);
router.get('/api/cliente/onebyid/:id', cliente.getById);
router.put('/api/cliente/update/:id', cliente.updateById);
router.delete('/api/cliente/delete/:id', cliente.deleteById);

// Rutas de Productos
router.post('/api/producto/create', producto.create);
router.get('/api/producto/all', producto.retrieveAll);
router.get('/api/producto/onebyid/:id', producto.getById);
router.put('/api/producto/update/:id', producto.updateById);
router.delete('/api/producto/delete/:id', producto.deleteById);

// Rutas de Facturas
router.post('/api/factura/create', factura.create);
router.get('/api/factura/all', factura.retrieveAll);
router.get('/api/factura/onebyid/:id', factura.getById);
router.put('/api/factura/update/:id', factura.updateById);
router.delete('/api/factura/delete/:id', factura.deleteById);

//ruta de ptarjeta
router.post('/api/ptarjeta/create', ptarjeta.create);
router.get('/api/ptarjeta/all', ptarjeta.retrieveAll);
router.get('/api/ptarjeta/onebyid/:id', ptarjeta.getById);
router.put('/api/ptarjeta/update/:id', ptarjeta.updateById);
router.delete('/api/ptarjeta/delete/:id', ptarjeta.deleteById);

module.exports = router;