'use strict';
var newArray ;
function greaterThan(array , number){
    newArray = array.sort(sortArray);
    var index = newArray.indexOf(number);
    newArray.splice(index,newArray.length);
    return newArray.length;
}

function sortArray (a,b){
    return b-a
}
