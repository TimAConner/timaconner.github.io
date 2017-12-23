"use strict";

const model = require('./model');
const view = require('./view');

let allProjects = [];
let selectedProjects = [];

module.exports.buildProjects = () => {
    model.fetchData("../json/projects.json").then(projectsObject => {
        allProjects = projectsObject.projects;
        selectedProjects = allProjects;
        view.showProjects(selectedProjects);
        activateSearchDiv();
    });
};  

const activateSearchDiv = () => {
    let searchBox = document.getElementById("search-box");
    searchBox.addEventListener("keyup", (e) => {
        let term = searchBox.value.toLowerCase();

        if(term.length >= 3){
            selectedProjects = allProjects.filter((project) => (project.name.toLowerCase().indexOf(term) !== -1 || project.description.toLowerCase().indexOf(term) !== -1));
            view.clearMainOutput();
            view.showProjects(selectedProjects);
        } else {
            view.clearMainOutput();
            selectedProjects = allProjects;
            view.showProjects(selectedProjects);
        }

    });
};