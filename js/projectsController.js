"use strict";

const model = require('./model');
const view = require('./view');
const searchUtility = require('./searchUtility');


let allProjects = [];
let selectedProjects = [];

module.exports.buildProjects = () => {
    model.fetchData("../json/projects.json").then(projectsObject => {
        allProjects = projectsObject.projects;
        selectedProjects = allProjects;
        view.showProjects(selectedProjects);
        searchUtility.activateSearchDiv({allArray: allProjects, selectedArray: selectedProjects}, function(arraysObject){
            selectedProjects = arraysObject.selectedArray;
            view.showProjects(selectedProjects);
        });
    });
};