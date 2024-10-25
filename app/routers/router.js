
let express = require('express');
let router = express.Router();
 
const cliente = require('../controllers/cliente.controllers.js');

// Rutas de los clientes
router.post('/api/cliente/create', cliente.create);
router.get('/api/cliente/all', cliente.retrieveAll);
router.get('/api/cliente/onebyid/:id', cliente.getById);
router.put('/api/cliente/update/:id', cliente.updateById);
router.delete('/api/cliente/delete/:id', cliente.deleteById);

module.exports = router;