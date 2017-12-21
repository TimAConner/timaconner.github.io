"use strict";
const model = require('./model');
const view = require('./view');


module.exports.buildBlog = () => {
    model.fetchData("../json/blog-post.json").then(posts => {
        view.showBlog(posts);
    });
};

module.exports.buildBlog();