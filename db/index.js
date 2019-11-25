const config = require('config');
const { task} = require('./models');

module.exports = (Sequelize) => {
	const options = {
        host: config.db.host,
        dialect: config.db.dialect,
        logging: false
    };
	const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, options);

	const Task = task(Sequelize, sequelize);

	return {
		Task,
		sequelize,
		Sequelize
	};
};
