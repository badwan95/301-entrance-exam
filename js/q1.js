'use strict';
var newArray ;
var oldArray ;
function greaterThan(array , number){
    oldArray = array;
    newArray = array.sort(sortArray);
    console.log(newArray);
    var index = newArray.indexOf(number);
    console.log(index);
    newArray.splice(index,array.length);
    return newArray.length;
}

function sortArray (a,b){
    return a-b
}
