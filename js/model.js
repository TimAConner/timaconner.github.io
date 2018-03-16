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
        
                // let url = `${apiKey.key}/posts.json`; // For Firebase
            //     let url = "../json/blog-post.json";
                //Activate on load to populate data with blog posts
                xhr.addEventListener("load", function() {
                    resolve(JSON.parse(this.responseText));
                });
            
                xhr.open("GET", url);
                xhr.send();
            }).then(posts => {
                // posts = sortFirebaseArray(posts); // For Firebase
                // console.log(posts); // For Firebase
                resolve(posts);
            });
        });
    }); 
};

module.exports.savePost = (post) => {
    apiLoader.fetch().then((apiKey) => {
        let jsonString = JSON.stringify(post);
        
        let postRequest = new XMLHttpRequest();
        postRequest.open("PATCH", `${apiKey.key}/posts/${post.timestamp}.json`);
        postRequest.send(jsonString);
    });
};

const sortFirebaseArray = (firebaseArray) => {
    let sortedArray = [];
    
    for(let post in firebaseArray){
        sortedArray.push(firebaseArray[post]);
    }

    sortedArray = sortedArray.sort((a, b) => b.timestamp - a.timestamp);
    return sortedArray;
};

module.exports.editData = (post) => {
    apiLoader.fetch().then((apiKey) => {
        let jsonString = JSON.stringify(post);
        
        let postRequest = new XMLHttpRequest();
        postRequest.open("PATCH", `${apiKey.key}/posts.json`);
        postRequest.send(jsonString);
    });
};