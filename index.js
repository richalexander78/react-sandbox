'use strict';

//create new paragraph element
let para = document.createElement("p");
//create new text 
let node = document.createTextNode("This is new.");
//append text to new paragraph element
para.appendChild(node);
//get html ID
let element = document.getElementById("root");
//append paragraph to html ID
element.appendChild(para);