//Utilities to deal with strings, numbers, and stuff

    /**
     * Flattens a deeply nested object, `source`. Produces `output` which
     * will be an object with dot-seperated paths pointing to all primative
     * values from the `source`.
     *
     * Examples:
     *
     *   flatten({ foo: { bar: 1 } })
     *     //=> { 'foo.bar': 1 }
     *
     *   flatten({ foo: [5, { bar: 2 }] })
     *     //=> { 'foo.0.bar': 1, 'foo.1.bar': 2 }
     *
     * @param source {object}
     * @returns {object}
     */
var flatten = function (source) {
  // TODO: implement flatten function
  var flattened = {}
  var ind = 0
  function makeFlat(curr, key){
    if(typeof curr !== 'object'){
      key = key.slice(0, key.length-1)
      flattened[key] = curr
      return
    }

    for(var keys in curr){

      makeFlat(curr[keys], key + keys + '.')
    }

  }

  makeFlat(source,'')
  console.log(flattened)
  return flattened
}



//find the length of the longest palindrome

longestPalindrome=function(s){
  var i = 0, z = s.length -1, longest = 0

  for(var i = 0; i < s.length; i++){
    for(var j = s.length; j >=i; j--){
      var curr = s.slice(i, j)
      if(palindromeCheck(curr)){
        if(curr.length > longest){longest = curr.length}
      }
    }
  }
  return longest
}

function palindromeCheck(str){
  var i = 0, z = str.length -1
  while(i <= z){
    if(str[i]!==str[z]){
      return false
    } else{
      i++
      z--
    }
  }
  return true
}



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


//check if string is a valid palindrome
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
  var i = 0, j = s.length - 1;
  while(i < j){
    if(s[i] !== s[j]){return false}
    i++;
    j--;
  }
  return true;
};

//check if number is power of 3
var isPowerOfThree = function(n) {
    if(n < 1){return false}
    if(n === 1 || n === 3){return true}
    return n%3 === 0 ? isPowerOfThree(n/3) : false
};

//convert from decimal to binary
function toBinary(n){
  var bitstring = ""

  while (n > 0 ){
    var bit = n % 2;
    n -= bit;
    var quotient = n/2;
    bitstring = bit + bitstring
    n = quotient ;
  }
  return bitstring
}

//Given a non-negative integer num,
//repeatedly add all its digits until the result has only one digit.

//For example:
//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2.
//Since 2 has only one digit, return it.
var addDigits = function(num) {
    num = num.toString()

    while(num.length > 1){
        var total = 0
        for(var i = 0; i < num.length; i++){
            total += +num[i]
        }
         return addDigits(total)
    }
    return +num
};


//Check if a number is a power of tow
function isPowerOfTwo(n){
  //.. should return true or false .
   while(n >= 1){
     if(n%2 === 0){
       n = n/2;
     } else if(n === 1){
     return true
   } else{
     return false
   }

}
}

//Also can do:

function isPowerOfTwo(n){
  if(n === 2){return true}
  if(n < 2){return false}
  return isPowerOfTwo(n)

}




