// "use strict";
// // let variables = [["x", 5],["y", 3],["z", 1]];

// // for(let i = 0; i < variables.length; i++){
// //     this[variables[i][0]] = variables[i][1];
// // }

// // console.log("x", x);//5
// // console.log("y", y);//3
// // console.log("z", z);//1

// // let a = 3;
// // console.log("a",  this['a']);//Undefined

// // //let x = 3;  If you run this down here, it says x is undefined above.  Maybe because x is being hoisted here, and then ????


// let blogs;

// (function(){
//     blogLoader.loadBlog();
//     console.log(blogLoader.getPosts());
// })();

// function createBlogCards() {
//     let output = document.getElementById("blog-output");

//     for(let i = 0; i < blogs.length; i++){
//         let section = document.createElement("section");
//         section.setAttribute("class", "card");
        
//         section.appendChild(createElement("h4", blogs[i].title));
//         section.appendChild(createElement("h5", blogs[i].date));
//         section.appendChild(createElement("div", blogs[i].content, true));

//         output.appendChild(section);
//     }
// }

// // createBlogCards();

// function createElement(element, text, innerHTML = false){
//     let domElement = document.createElement(element);
//     let textNode;
//     if(innerHTML === true){
//         domElement.innerHTML = text;
//     } else {
//         textNode = document.createTextNode(text);
//         domElement.appendChild(textNode);
//     }
//     return domElement;
// }