
let express = require('express');
let router = express.Router();
 
const cliente = require('../controllers/cliente.controllers.js');
const producto = require('../controllers/producto.controllers.js');

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

module.exports = router;