//this works also. [0] needed because returns selection
var selectTree = document.getElementsByTagName('ul')[0];

// querySelector works perfectly
//var selectTree = document.querySelector('nav ul');

var addInput= document.getElementById('input-field');
var addBttn = document.getElementById('add-button');


addBttn.addEventListener("click", function() {


//to create new element *not added to DOM yet
let li = document.createElement('li');
li.textContent = addInput.value;
selectTree.appendChild(li);

});
