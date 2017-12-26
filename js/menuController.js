"use strict";
const model = require('./model');
const view = require('./view');

const menuItems = {
    "Home" : require("./homeController"),
    "Blog" : require("./blogController"),
    "Contact" : require("./contactsController"),
    "Resume" : require("./resumeController"),
    "Projects" :  require("./projectsController")
};

// let navHTML = '<li><a href="index.html">Home</a></li><li><a href="resume.html">Resume</a></li><li><a href="contact.html">Contact</a></li><li><a href="aboutme.html">About Me</a></li><li><a href="projects.html">Projects</a></li><li><a href="blog.html">Blog</a></li>';


const hasMenuItem = (item) => {
    for(let menuItem in menuItems){
        if(menuItem === item){
            return true;
        }
    }

    return false;
};


const activateMenu = () => {
    let menu = document.getElementById("menu");
    menu.addEventListener("click", (event) => {
        let title = event.target.id;
        if(hasMenuItem(title)){
            view.clearPage();
            document.getElementById("page-title").innerText = title;
            document.title = title;
            menuItems[title][`build${title}`]();
        }
    });
};

module.exports.buildMenu = () => {
        view.showMenu(menuItems);
        activateMenu();
};

