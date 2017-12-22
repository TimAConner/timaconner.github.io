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
module.exports.showBlog = (posts, totalPosts, postsPerPage) => {
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

    let paginationButtonAmount = (totalPosts % postsPerPage) + 1;

    let paginationButtonDiv = document.createElement("div");
    paginationButtonDiv.classList.add("pagination-button");

    for(let i = 0; i < paginationButtonAmount; i++){
        let anchor = document.createElement("a");
        anchor.appendChild(document.createTextNode(`Page ${ i < 1 ? 1 : (i*postsPerPage)}`));
        anchor.setAttribute("href", "#page-title");
        anchor.classList.add("pagination-button");
        anchor.classList.add("PostsPage");
        anchor.setAttribute("startPost", `${ i < 1 ? 1 : (i*postsPerPage)}`);
        anchor.setAttribute("endPost", `${ i < 1 ? postsPerPage : ((i*postsPerPage)+postsPerPage)}`);
        
        paginationButtonDiv.appendChild(anchor);
    }
    
    output.appendChild(paginationButtonDiv);
};




module.exports.showContacts = (contacts) => {
    
    let contactsHtml = document.createDocumentFragment();

    for(let i = 0; i < contacts.length; i++){
        let section = document.createElement("section"),
        anchor = document.createElement("a");
        if(contacts[i].svg !==  ""){
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            path = document.createElementNS("http://www.w3.org/2000/svg", "path");  

            anchor.setAttribute("href", contacts[i].link);

            svg.setAttribute("viewBox", "0 0 512 512");
            svg.setAttribute("width", "100");
            svg.setAttribute("height", "100");

            path.setAttribute("d", contacts[i].svg);

            svg.appendChild(path);
            anchor.appendChild(svg);
            section.appendChild(anchor);
            contactsHtml.appendChild(section);
        } else {
            anchor.setAttribute("href", contacts[i].link);
            anchor.appendChild(createElement("span", contacts[i].Website));          
            
            section.appendChild(anchor);
            contactsHtml.appendChild(section);
        }
    }

    output.appendChild(contactsHtml);
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

module.exports.showResume = (jobs) => {
    let jobsHtml = document.createDocumentFragment();

    for(let i = 0; i < jobs.length; i ++){
        let article = document.createElement("article");
        article.setAttribute("class", "job-article");
        article.appendChild(createElement("h3", jobs[i].company));
        article.appendChild(createElement("p", jobs[i].title));
        article.appendChild(createElement("p", jobs[i].dates));

        jobsHtml.appendChild(article);
    }

    output.appendChild(jobsHtml);
};