"use strict";

const blogModel = require('./blogModel');
const blogView = require('./blogView');

module.exports.populateBlog = () => {
    blogModel.getPosts(createBlog);
};

const createBlog = (posts) => {
    blogView.createBlogCards(posts);  
};