import Vue from "vue";
import Vuex from "vuex";
import databricks from "../modules/databricks/store"



Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		databricks
	}
});