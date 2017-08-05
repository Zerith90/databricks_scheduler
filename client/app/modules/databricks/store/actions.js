import Vue from "vue";
import toastr from "../../../core/toastr";
import { LOAD_DATABRICKS_HISTORY,LOAD_DATABRICKS_JOBS} from "./types";

import Service from "../../../core/service";


let databricks_job_history_service = new Service("databricks_job_history"); 
let databricks_job_service = new Service("databricks_jobs"); 

export const getDatabricksJobsHistory = function ({commit, state},category) {
	return databricks_job_history_service.rest("list", {
	}).then((data) => {
		console.log(data)
		commit(LOAD_DATABRICKS_HISTORY,data);
	}).catch((err) => {
		console.log(err)
	})
};

export const getDatabricksJobs = function ({commit, state},category) {
	return databricks_job_service.rest("list", {
	}).then((data) => {
		console.log(data)
		commit(LOAD_DATABRICKS_JOBS,data);
	}).catch((err) => {
		console.log(err)
	})
};