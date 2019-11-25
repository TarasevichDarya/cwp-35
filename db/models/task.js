module.exports = (Sequelize, sequelize) => sequelize.define('task', {
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true
		},
		completed: {
			type:Sequelize.BOOLEAN
		},
		text: {type:Sequelize.STRING}
	}
);
