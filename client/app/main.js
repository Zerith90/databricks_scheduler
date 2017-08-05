"use strict";

require("es6-promise/auto");

import Vue from "vue";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
import Filters from "./core/filters";
// import VueFormGenerator from "vue-form-generator";
import VueWebsocket from "vue-websocket";
import store from "./core/store";
import App from "./core/App";
import VueMaterial from "vue-material";
import infiniteScroll from 'vue-infinite-scroll';
import VueScrollTo from 'vue-scrollto';
import VueHighlightJS from 'vue-highlightjs'
import VueTimeago from 'vue-timeago'
import VueClipboards from 'vue-clipboard2';
Vue.use(VueClipboards);

Vue.use(VueHighlightJS)
Vue.use(Filters);
Vue.use(infiniteScroll);
Vue.use(VueScrollTo);
Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})
// Vue.use(VueWebsocket);
Vue.use(VueMaterial)
//Vue.http.headers.common['X-CSRF-TOKEN'] = $('input[name="csrf"]').val();

Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'red',
  warn: 'red'
})

let router = require("./core/router").default; // Load only after i18next initialized

new Vue({
	el: "#app",
	components: {
		App
	},
	router,
	store,
	render: h => h("app")
});
	
// });
