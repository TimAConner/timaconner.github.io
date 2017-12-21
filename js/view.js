"use strict";

let output = document.getElementById("main-output");


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

// Populate output with blog posts
module.exports.showBlog = (posts) => {
    // Grab div that will be populated
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




module.exports.showContacts = (contacts) => {
    let output = document.getElementById("contacts-output");
    
    for(let i = 0; i < contacts.length; i++){

    }
};

module.exports.showMenu = (menuItems) => {
    let menu = document.getElementById("menu");
    for(let i = 0; i < menuItems.length; i++){
        let anchor = createElement("a", menuItems[i].title);
        anchor.setAttribute("href", "#");
        anchor.setAttribute("id", menuItems[i].title);

        let li = createElement("li", "");
        li.appendChild(anchor);

        menu.appendChild(li);
    }
};

module.exports.showHome = () => {

    output.innerHTML = `  <section> <!-- Issue #1 User should see your story.-->
    <article>
        <h2>Why?</h2>
        <p>Why am I a programmer? I'm glad you asked.  It's a doozy.</p>
        <p>I love to create.  That's it.</p>
    </article>
</section>`;

};