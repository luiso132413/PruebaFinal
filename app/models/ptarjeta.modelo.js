module.exports = (sequelize, Sequelize) => {
	const Ptarjeta = sequelize.define('ptarjeta', {
		id_pago: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		ntarjeta:{
			type: Sequelize.STRING,
            allowNull: false
		},
		anio: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		cod_seguridad: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		nombret: {
			type: Sequelize.STRING,
			allowNull: false
		},
		correo: {
			type: Sequelize.STRING,
		}
	}, {

	});
	
	return Ptarjeta;
};
