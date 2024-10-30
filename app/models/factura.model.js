module.exports = (sequelize, Sequelize) => {
	const Factura = sequelize.define('Factura', {
		id_fact: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cod_fact:{
			type: Sequelize.STRING,
            allowNull: false
		},
		nombre: {
			type: Sequelize.STRING,
			allowNull: false
		},
		noDocumento: {
			type: Sequelize.STRING,
			allowNull: false
		},
		telefono: {
			type: Sequelize.STRING,
			allowNull: false
		},
		fecha: {
			type: Sequelize.DATEONLY,
			allowNull: false
		},
		impuesto: {
			type: Sequelize.DOUBLE,
			defaultValue: 0.0
		},
		servicio: {
			type: Sequelize.DOUBLE,
			defaultValue: 0.0
		},
        totalGlobal: {
			type: Sequelize.DOUBLE,
			allowNull: false
		},
        tipoDepago: {
			type: Sequelize.STRING,
			allowNull: false
		}
	}, {

	});
	
	return Factura;
};
