"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import databricks from "../modules/databricks"


Vue.use(VueRouter);

export default new VueRouter({
	mode: "hash",
	routes: [
	{
		name: 'databricks',
		path: "/",
		component: databricks
	}]
});