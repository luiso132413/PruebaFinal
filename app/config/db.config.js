

const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
db.Producto = require('../models/producto.model.js')(sequelize, Sequelize);
db.Factura = require('../models/factura.model.js')(sequelize, Sequelize);
db.Ptarjeta = require('../models/ptarjeta.modelo.js')(sequelize, Sequelize);
 
module.exports = db;