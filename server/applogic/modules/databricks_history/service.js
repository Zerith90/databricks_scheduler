"use strict";

let logger = require("../../../core/logger");
let config = require("../../../config");
let C = require("../../../core/constants");
let _ = require("lodash");
let AWS = config.aws;
let zlib = require('zlib')
let zip = zlib.createUnzip();
let s3 = new AWS.S3()
let databricks_job_history = require("../../../models").databricks_job_history;

let moment = require('moment');


module.exports = {
    settings: {
        name: "databricks_job_history",
        version: 1,
        namespace: "databricks_job_history",
        rest: true,
        ws: true,
        graphql: true,
        permission: C.PERM_LOGGEDIN,
        role: "user",
        modelPropFilter: "code type address name description status lastCommunication createdAt updatedAt"
    },

    actions: {
        find: {
            cache: true,
            handler(ctx) {
                let filter = {};
            }
        },
        list: {
            cache: true,
            handler(ctx) {
                return databricks_job_history.findAll().then((history)=>{
                    return history
                }).catch((err)=>{
                    console.log(err)
                })
            }
        },
        // return a model by ID
        get: {
            cache: true,
            handler(ctx) {
                
            }
        },

        create(ctx) {

            return {}
        },

        update(ctx) {
            return {}
        },

        remove(ctx) {
            return {}
        }

    },

    methods: {

    },

    init(ctx) {
        // Fired when start the service
    },

    socket: {
        afterConnection(socket, io) {
            // Fired when a new client connected via websocket
        }
    }

};