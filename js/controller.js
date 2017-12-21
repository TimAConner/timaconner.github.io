"use strict";

const model = require('./model');
const view = require('./view');



module.exports.populateBlog = () => {
    model.fetchData("../json/blog-post.json").then(posts => {
        view.createBlogCards(posts);
    });
};

module.exports.populateResume = () => {
    model.fetchData("../json/resume.json").then(posts => {
        view.createBlogCards(posts);
    });
}