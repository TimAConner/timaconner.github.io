// let variables = [["x", 5],["y", 3],["z", 1]];

// for(let i = 0; i < variables.length; i++){
//     this[variables[i][0]] = variables[i][1];
// }

// console.log("x", x);//5
// console.log("y", y);//3
// console.log("z", z);//1

// let a = 3;
// console.log("a",  this['a']);//Undefined

// //let x = 3;  If you run this down here, it says x is undefined above.  Maybe because x is being hoisted here, and then ????



let blogs = [
    {
        title: "Class Topic: Functions",
        date: "29 November 2017",
        content: `<article>
        <section>
            <h4>SOLID Principles -- Single Responsiblity</h4>
            <p>Functions that do one thing, that have one clear responsibility.  Err on the side of smaller functions.</p>
            <h5>S Check List</h5>
            <ul>
                <li>Don't have functions that would have a name addElementsAndDeleteElements.  Break into more than one.</li>
                <li>Are there any useful parts that can be extracted?</li>
                <li>Can another funciton be resued here?</li>
            </ul>
            <p class="question">Do more thinking on: breaking down a funciton into multiple functions to give them descriptive names to make the code more readable vs. breaking it down only to resuable code junks.</p>
        </section>
        <section>
            <h4>Arrow Functions</h4>
            <p>These have always confused me when I have seen them.  They are shorthand for anonymous functions and changes what <i>this</i> means in their scope.</p>
            <pre class="code">
function(x){
return x+1;
} 

//is the same as 

x => x + 1;
            </pre>
            <p>I have seen these before in find functions.  Array.find(x => x > 5).  Previously, these did not make sense.  .find feeds in an argument to x, an element, and then it returns if x > 5.</p>
        </section>
        <section>
            <h4>Bubbling</h4>
            <p>When an event happens (whatever that means) it is sent up the DOM tree, moving from parent to parent.  Every parent can have a listener and hear an event.</p>
            <p>event.target = the elemtent clicked on.  event.currentTarget = element that listener is on.</p>
            <p>This has a lot of potential to usee when dealing with lots of buttons.  The element above them holds the listener, not each button.  Will have to do more research into the best ways to implement this.</p>
        </section>
        <section>
            <h4>Hoisting</h4>
            <p>Javascript sifts through the script and moves var and function to top of the file.  Only the declaration is hoisted--it sets aside a data slot for their refrence name, but it does not assign a value.</p>
        </section>
        <section>
            <h4>Random</h4>
            <p>Order functions that will be called in another function before the function that calls them.  This makes it easier to read for someone looking at the code for the first time.</p>
            <pre class="code">
function1(){

}
function2(){

}
callFunctions(){
function1();
function2();
}
            </pre>
        </section>
        <section>
            <h4>Hotkeys</h4>
            <h5>VS Code</h5>
            <ul>
                <li>alt + left/right arrow keys = move between tabs</li>
                <li>alt + cntrl + left/right arrow keys = switch tab to other view. </li>
                <li>alt + up/down arrow = move line of code up /down in document.</li>
            </ul>
            <h5>Google Chrome</h5>
            <ul>
                <li>cntrl + tab = forward tab</li>
                <li>cntrl + shift + tab = backward tab</li>
                <li>ctrl + w = close tab</li>
            </ul>
        </section>`
    },
    {
        title: "Class Topic: Refactoring Functions",
        date: "30 November 2017",
        content: `            <article>
        <section>
            <h5>Best Practices Production Code</h5>
            <ul>
                <li>Remove commented out code on PR.</li>
                <li>Don't include console logs on PR.</li>
            </ul>
        </section>
        <section>
            <h5>Javascript Tip</h5>
            <p>.innerHTML wipes the html.  .textContent will modify the text of that HTML, without wiping it and starting new.</p>
            <h5>Javascript Dynamic Variables</h5>
            <pre class="code">
let variables = [["x", 5],["y", 3],["z", 1]];

for(let i = 0; i < variables.length; i++){//Creates variables dynamically.
this[variables[i][0]] = variables[i][1];
}

console.log("x", x);//5
console.log("y", y);//3
console.log("z", z);//1

let a = 3;
console.log("a",  this['a']);//Undefined

//let x = 3;  If you run this down here, it says x is undefined above.  Maybe because x is being hoisted here, and then ????
            </pre class="code">
        </section>
        <section>
            <h5>Hotkeys</h5>
            <h6>VS Code</h6>
            <ul>
                    <li>ctrl + d = select whole word.</li>
                    <li>alt + up/down arrows = move line</li>
            </ul>
            <h6>Google Chrome</h6>
            <ul>
                <li>ctrl + shift + c = Inspector</li>
            </ul>
        </section>
        <section>
            <h5>Refactoring Code</h5>
            <h6>UI Down</h6>
            <p>Look at your UI.  How many inputs are there?  That amount will give you the skeleton to how many functions you will need.  Of course, your code will grow and change as you write it, but this can give you a basic idea about what you will need.</p>
        </section>
        <section>
            <h5>Questions</h5>
            <ul>
                <li>Javascript: Can there be multiple <i>events</i> happen at the same time?  If event can always be accessed, then how are two events proccessed at the same time?  Is there another way to access events?</li>
                <li>HTML: When are custom attributes okay to use?  Seems like putting data in HTML would be bad practice.</li>
                <li>CSS: When/how does the browser handle CSS?  If javascript changes css, does it then "rerun" it?</li>s
            </ul>
        </section>
    </article>`
    }
];

function createBlogCards() {
    let output = document.getElementById("blog-output");

    for(let i = 0; i < blogs.length; i++){
        let section = document.createElement("section");
        section.setAttribute("class", "card");
        
        section.appendChild(createElement("h4", blogs[i].title));
        section.appendChild(createElement("h5", blogs[i].date));
        section.appendChild(createElement("div", blogs[i].content, true));

        output.appendChild(section);
    }
}

createBlogCards();

function createElement(element, text, innerHTML = false){
    let domElement = document.createElement(element);
    let textNode;
    if(innerHTML === true){
        domElement.innerHTML = text;
    } else {
        textNode = document.createTextNode(text);
        domElement.appendChild(textNode);
    }
    return domElement;
}