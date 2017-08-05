import {
    LOAD_DATABRICKS_HISTORY,
    LOAD_DATABRICKS_JOBS
} from "./types";

import {
    each,
    find,
    assign,
    remove,
    isArray
} from "lodash";
import Vue from "vue"
const state = {
    history: [],
    jobs: []
};

const mutations = {
    [LOAD_DATABRICKS_HISTORY](state, models) {
        state.history.splice(0);
        state.history.push(...models)
    },
    [LOAD_DATABRICKS_JOBS](state, models) {
        state.jobs.splice(0);
        state.jobs.push(...models)
    }
}



import * as getters from "./getters";
import * as actions from "./actions";

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};