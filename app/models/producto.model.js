module.exports = (sequelize, Sequelize) => {
	const Producto = sequelize.define('producto', {
		id_pro: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		descripcion: {
			type: Sequelize.STRING
		},
		precio: {
			type: Sequelize.DOUBLE
		}
	}, {
		
	});
	
	return Producto;
};
