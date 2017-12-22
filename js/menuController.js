"use strict";
const model = require('./model');
const view = require('./view');

const pageControllers = {
    "Blog" : require("./blogController"),
    "Home" : require("./homeController"),
    "Contact" : require("./contactsController"),
    "Resume" : require("./resumeController")
};

// let navHTML = '<li><a href="index.html">Home</a></li><li><a href="resume.html">Resume</a></li><li><a href="contact.html">Contact</a></li><li><a href="aboutme.html">About Me</a></li><li><a href="projects.html">Projects</a></li><li><a href="blog.html">Blog</a></li>';

const clearPage = () => {
    document.getElementById("main-output").innerHTML = "";
};

const hasMenuItem = (item) => {
    for(let menuItem in pageControllers){
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
            clearPage();
            document.getElementById("page-title").innerText = title;
            document.title = title;
            pageControllers[title][`build${title}`]();
        }
    });
};

module.exports.buildMenu = () => {
    model.fetchData("../json/menu.json").then(menuItems => {
        view.showMenu(menuItems.items);
        activateMenu();
    });
};

