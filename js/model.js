"use strict";

const apiLoader = require('./apiKeyModel');

//https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>


// Load blog into data and get posts.
module.exports.fetchData = (url) => {
    return new Promise(function(resolve, reject) {
        apiLoader.fetch().then((apiKey) => {
            new Promise(function(resolve, reject){ 
                let xhr = new XMLHttpRequest();
                let data;
        
               // let url = `${apiKey.key}/posts.json`;
                //let url = "../json/blog-post.json";
                //Activate on load to populate data with blog posts
                xhr.addEventListener("load", function() {
                    resolve(JSON.parse(this.responseText).posts);
                });
            
                xhr.open("GET", url);
                xhr.send();
            }).then(data => {
                resolve(data);
            });
        });
    }); 
};