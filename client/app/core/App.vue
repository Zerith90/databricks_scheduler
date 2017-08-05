<template lang="pug">
	md-layout
		<!-- page-header(@sidebar="toggleSideBar") -->
		section.app-main(md-row)
			<!-- sidebar(:miniSidebar="miniSidebar") -->
			router-view.smooth(keep-alive :class="{ mini: !miniSidebar}", style="height:100vh",md-column)
</template>

<script>
	import Vue from "vue";

	import PageHeader from "./components/header/index";
	import Sidebar from "./components/sidebar/index";

	import Service from "./service";

	import { mapActions, mapGetters } from "vuex";

	export default {

		/**
		 * Create websocket connection to the root namespace
		 */		
		//mixins: [ MixinsIO() ],

		/**
		 * Load sub-components
		 */
		components: {
			PageHeader,
			Sidebar
		},
	
		/**
		 * Create app data object
		 * 
		 * TODO: move to vuex state
		 */
		data() {
			return {
				// wsReconnecting: false,
				miniSidebar: true
			};
		},

		watch: {

		},

		/**
		 * Socket handlers. Every property is an event handler
		 */
		socket: {

			// events: {
			// 	/**
			// 	 * Send welcome message after connect
			// 	 */
			// 	connect() {
			// 		console.log("Websocket connected to " + this.$socket.nsp);

			// 		if (this.wsReconnecting)
			// 			// Reload browser if connection established after disconnect
			// 			window.location.reload(true);
			// 		else
			// 			this.$socket.emit("welcome", "Hello! " + navigator.userAgent);
			// 	},

			// 	disconnect() {
			// 		console.log("Websocket disconnected from " + this.$socket.nsp);
			// 		this.wsReconnecting = true;
			// 	},

			// 	error(err) {
			// 		console.error("Websocket error!", err);
			// 	}
			// }
		},
		methods: {
			...mapActions("session", [
				"getSessionUser"
			]),
			toggleSideBar(event){
				this.miniSidebar=event;
			},
			update: function(vm) {
				// if (vm == null)
				// 	return;
				
				// let i = vm._watchers.length;
				// while (i--)
				// 	vm._watchers[i].update(true);
				
				// let children = vm.$children;
				// i = children.length;
				// while (i--)
				// 	this.update(children[i]);
			}
		},

		/**
		 * Application created
		 */
		created() {
			console.log("App started!");
			window.app = this;

			// this.getSessionUser();

			// debug
			// window.postService = new Service("posts", this);
			// window.counterService = new Service("counter", this);
			// window.deviceService = new Service("device", this);
			
		}
	};
</script>

<style lang="sass">
	@import "../../scss/style.scss";
	.mini{
		padding-left: 250px !important;
		-webkit-transition:all 0.5s ease
	}
	.smooth{

		-webkit-transition:all 0.5s ease
	}
	.smooth > div {
		overflow-y:auto;
		height:100vh;
	}
</style>