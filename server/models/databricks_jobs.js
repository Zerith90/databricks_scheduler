'use strict';

module.exports = function(sequelize, Sequelize) {
	const databricks_jobs = sequelize.define('databricks_jobs', {
		job_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		contact_email: {
			type: Sequelize.STRING
		},
		end_date: {
			type: Sequelize.DATE
		},
		batch: {
			type: Sequelize.STRING
		},
		day: {
			type: Sequelize.STRING
		}


	},{
		timestamps:false,
		classMethods:{
			// associate(models){
				// meta_report.hasMany(models.meta_subreport,{foreignKey: 'report_id'})
			// }
		}
	})

	return databricks_jobs
}