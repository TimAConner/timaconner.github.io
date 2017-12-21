"use strict";
const model = require('./model');
const view = require('./view');


let navHTML = '<li><a href="index.html">Home</a></li><li><a href="resume.html">Resume</a></li><li><a href="contact.html">Contact</a></li><li><a href="aboutme.html">About Me</a></li><li><a href="projects.html">Projects</a></li><li><a href="blog.html">Blog</a></li>';


const activateMenu = () => {
    let menu = document.getElementById("menu");
    menu.addEventListener("click", (event) => {
        console.log(event.target);
    });
};

module.exports.buildMenu = () => {
    model.fetchData("../json/menu.json").then(menuItems => {
        view.showMenu(menuItems.items);
        activateMenu();
    });
};

