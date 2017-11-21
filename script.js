var navHTML = '<li><a href="index.html">Resume</a></li><li><a href="contact.html">Contact</a></li><li><a href="aboutme.html">About Me</a></li><li><a href="projects.html">Projects</a></li>';

function createMenu(){
    document.getElementById("menu").innerHTML = navHTML;
}

createMenu();