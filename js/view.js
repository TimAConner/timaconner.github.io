"use strict";

// Populate output with blog posts
module.exports.createBlogCards = (posts) => {
    // Grab div that will be populated
    let output = document.getElementById("blog-output");

    //Loop through posts and create them
    for(let i = 0; i < posts.length; i++){
        // Create blog post to be populated with
        let section = document.createElement("section");

        // Add class to blog posts
        section.setAttribute("class", "card");
        
        // Build blog posts
        section.appendChild(createElement("h3", posts[i].title));
        section.appendChild(createElement("h4", posts[i].date));
        section.appendChild(createElement("div", posts[i].content, true));

        // Populate output
        output.appendChild(section);
    }
};

// Builds a dom element and returns it
const createElement = (element, text, innerHTML = false) => {
    let domElement = document.createElement(element);
    let textNode;
    if(innerHTML === true){
        domElement.innerHTML = text;
    } else {
        textNode = document.createTextNode(text);
        domElement.appendChild(textNode);
    }
    return domElement;
};