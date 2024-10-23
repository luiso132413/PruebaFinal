
let express = require('express');
let router = express.Router();
 
const general = require('../controllers/general.controllers.js');

router.post('/api/generl/create', general.create);
router.get('/api/general/all', general.retrieveAll);
router.get('/api/general/onebyid/:id', general.getById);
router.put('/api/general/update/:id', general.updateById);
router.delete('/api/general/delete/:id', general.deleteById);

module.exports = router;