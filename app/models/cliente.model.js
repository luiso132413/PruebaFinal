module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('cliente', {
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
		nacionalidad: {
			type: Sequelize.STRING
		},
		telefono: {
			type: Sequelize.INTEGER
		}
	}, {
		paranoid: true,    // Habilita soft delete
		timestamps: true   // Habilita createdAt y updatedAt
	});
	
	return Cliente;
};
