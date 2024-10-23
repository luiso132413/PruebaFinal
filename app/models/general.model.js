module.exports = (sequelize, Sequelize) => {
	const General = sequelize.define('general',{
		id_gen: {
			type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
		},
		nombre: {
			type: Sequelize.STRING
		},
		rol: {
			type: Sequelize.INTEGER
		},
		fechanacimiento: {
			type: Sequelize.DATE
		},
		sueldo:{
			type: Sequelize.DOUBLE
		}
	});
	return General;
};