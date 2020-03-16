'use strict';

// Global Variables
var container = document.getElementById('container');
var olEl = document.createElement('ol');
olEl.id = 'olElement';
container.appendChild(olEl);


// Constructor function
var listArray = [];
var savedList = [];


// Creating first empty local storage array to prevent error
if (localStorage.List === undefined){
    localStorage.List = JSON.stringify(listArray);
}

//Retrieving list from local storage 
function getList(){
    var savedList = localStorage.List;
    listArray = JSON.parse(savedList);
}
getList();
// Building the already existing list
for (var i=0;i<listArray.length;i++){
    var ol = document.getElementById('olElement');
    var liEl = document.createElement('li');
    ol.appendChild(liEl);
    var h3El = document.createElement('h3');
    h3El.textContent = listArray[i].subject;
    liEl.appendChild(h3El);
    var pEl = document.createElement('p');
    pEl.textContent= listArray[i].date;
    liEl.appendChild(pEl);
    var button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'X';
    liEl.appendChild(button);
}

function ListMaker (subject , date){
    this.subject=subject;
    this.date = date;
    listArray.push(this);
}

//Event listener
var theSubject;
var theDate;

var form = document.getElementById('theForm');
form.addEventListener('submit', makeList);

function makeList(event){
    event.preventDefault();
    theSubject = document.getElementById('activity').value;
    theDate = document.getElementById('dateOfSubject').value;
    new ListMaker(theSubject,theDate);
    creatingList();
    saveToStorage();
}

function creatingList(){
    var ol = document.getElementById('olElement');
    var liEl = document.createElement('li');
    ol.appendChild(liEl);
    var h3El = document.createElement('h3');
    h3El.textContent = theSubject;
    liEl.appendChild(h3El);
    var pEl = document.createElement('p');
    pEl.textContent=theDate;
    liEl.appendChild(pEl);
    var button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'X';
    liEl.appendChild(button);
}

function saveToStorage(){
    var lastItemInArray = listArray.length-1;
    localStorage.List = JSON.stringify(listArray);
}



