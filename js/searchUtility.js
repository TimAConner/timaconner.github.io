"use strict";

const view = require("./view");

module.exports.activateSearchDiv = (arraysObject, callBackFunction) => {
    let searchBox = document.getElementById("search-box");
    // console.log("here");
    searchBox.addEventListener("keyup", (e) => {
        let term = searchBox.value.toLowerCase();
        let minimumCharacters = 3;

        if(term.length >= minimumCharacters){
            arraysObject.selectedArray = arraysObject.allArray.filter((x) => (x.title.toLowerCase().indexOf(term) !== -1 ||x.content.toLowerCase().indexOf(term) !== -1));
            
            view.clearMainOutput();
            callBackFunction(arraysObject);
        } else {
            view.clearMainOutput();
            arraysObject.selectedArray = arraysObject.allArray;
            callBackFunction(arraysObject);
        }
    });
};