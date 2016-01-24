//reverse a string in less than linear time

var reverse = function(array) {
  var start = 0;
  var end = array.length - 1;
  var mid = Math.floor(array.length/2);
  while(start <= mid && end >= mid){
    var temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
return array;
}


//make a function that will call another function when you need it
var make_available = function (fn) {
  return fn.bind.apply(fn, arguments);
};

//remove the vowels from a string
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

//return the last element of a list
function last(list){
 return list.length > 1 ? list[list.length -1] : arguments[arguments.length - 1];
}


//Write the definition of the function "say" such that calling this:
//say("Hello")("World")
//returns "Hello World"
var say = function(string1) {
  return function(string2){
    return string1 +' '+ string2
  }
}




