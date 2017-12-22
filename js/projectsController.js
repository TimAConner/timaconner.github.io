"use strict";

const model = require('./model');
const view = require('./view');

module.exports.buildProjects = () => {
    model.fetchData("../json/projects.json").then(projectsObject => {
        view.showProjects(projectsObject.projects);
    });
};  
