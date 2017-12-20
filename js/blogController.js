"use strict";

const blogModel = require('./blogModel');
const blogView = require('./blogView');

module.exports.populateBlog = () => {
    blogModel.fetchPosts().then(posts => {
        blogView.createBlogCards(posts);
    });
};

