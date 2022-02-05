let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.Value;
    todocontainer.appendChild(paragraph);
})