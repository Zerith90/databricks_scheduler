'use strict';

module.exports = function(sequelize, Sequelize) {
	const databricks_job_history = sequelize.define('databricks_job_history', {
		job_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		batch: {
			type: Sequelize.STRING
		},
		date_run: {
			type: Sequelize.DATEONLY
		},
		start_time: {
			type: Sequelize.DATE
		},
		runtime: {
			type: Sequelize.INTEGER
		},
		status: {
			type: Sequelize.BOOLEAN
		}


	},{
		timestamps:false,
		classMethods:{
			// associate(models){
				// meta_report.hasMany(models.meta_subreport,{foreignKey: 'report_id'})
			// }
		}
	})

	return databricks_job_history
}