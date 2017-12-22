"use strict";

const model = require('./model');
const view = require('./view');

module.exports.buildContact = () => {
    model.fetchData("../json/contacts.json").then(contacts => {
        view.showContacts(contacts.contacts);
    });
};  
