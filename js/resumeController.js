"use strict";

const model = require('./model');
const view = require('./view');

module.exports.buildResume = () => {
    model.fetchData("../json/resume.json").then(jobs => {
        view.showResume(jobs.jobs);
    });
};  
