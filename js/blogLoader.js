// "use strict";
// var blogLoader = (function(){

//     let data;

//     function loadBlog(){
//         let xhr = new XMLHttpRequest();
//         xhr.addEventListener("load", function() {
//             // data = JSON.parse(this.responseText);
//             console.log(this.responseText);
//         });
//         xhr.open("GET", "../json/blog-post.json");
//         xhr.send();
//     }

//     function getPosts(){
//         return data;
//     }

//     return {
//         loadBlog,
//         getPosts
//     };
// }());