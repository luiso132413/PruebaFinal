module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('cliente',{
		id_cli: {
			type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
		},
		nombre_cli: {
			type: Sequelize.STRING
		},
		apellido_cli: {
			type: Sequelize.STRING
		},
		fechanacimiento: {
			type: Sequelize.DATEONLY
		},
		edad: {
			type: Sequelize.INTEGER
		},
		tipo_indentificacion: {
			type: Sequelize.STRING
		},
		no_identificacion: {
			type: Sequelize.INTEGER
		},
		nacionalidad:{
			type: Sequelize.STRING
		},
		telefono: {
			type: Sequelize.INTEGER
		}
	});
	return Cliente;
};