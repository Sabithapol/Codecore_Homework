/*[Lab] Are Values Arrays?
Write a function, `areValuesArrays`, that takes an array, `arr`. It returns `true` if all values in `arr` are of the `array` type otherwise it returns `false`.


Example:

areValuesArrays([[1], [2], [4, 5]]); // returns true
areValuesArrays([1, [2], [6, 7, 8]]); // returns false
areValuesArrays([[1], 2, [6, 7, 8]]); // returns false
areValuesArrays(['true', 'false']); // returns false*/




function areValuesArray(arr){
    for(let i=0;i<arr.length;i++){
      if (!Array.isArray(arr[i])) {
        return false;
      }
    }
    //return "true"
    
  }
areValuesArray([1],[2],[7])
