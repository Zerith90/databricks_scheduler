<template lang="pug">
	md-layout(md-align="center" md-row style="margin-top:50px")
		md-layout()
			md-tabs(md-centered )
				md-tab(md-label="Jobs")
					md-layout(md-align="center",md-row)
						md-layout( md-column md-flex-small="100", md-flex-large="80",md-flex-medium="80")
							md-table
								md-table-header
									md-table-row
										md-table-head(v-for="(k,v) in jobs[0]") {{v.toUpperCase().split('_').join(' ')}}
								md-table-body
									md-table-row(v-for="element in jobs")
										md-table-cell(v-for="(k,v) in element") {{k}}
				md-tab(md-label="History")
					md-layout(md-align="center",md-row)
						md-layout( md-column md-flex-small="100", md-flex-large="80",md-flex-medium="80")
							md-table
								md-table-header
									md-table-row
										md-table-head(v-for="(k,v) in history[0]") {{v.toUpperCase().split('_').join(' ')}}
								md-table-body
									md-table-row(v-for="element in history")
										md-table-cell(v-for="(k,v) in element") {{k}}

														
</template>

<script>
	import Vue from "vue";
	import moment from "moment"
	import {
	    mapGetters,
	    mapActions
	} from "vuex";
	export default {
		components:{
			moment
		},
	    computed: {
	        ...mapGetters("databricks", [
	        	"jobs",
	        	"history"
	        ]),

	    },
	    data(){
	    	return{
	    	}
	    },
	    methods: {
	        ...mapActions("databricks", [
	        	"getDatabricksJobs",
	        	"getDatabricksJobsHistory"
	        ]),
	     
	    },
	    created() {
	    	this.getDatabricksJobsHistory();
	    	this.getDatabricksJobs();
	    }
	};

</script>

<style lang="sass" scoped>
</style>