/*Write a function, findDuplicates, that takes an array of strings and/or integers, values. Return a new array containing all the values that are duplicated in the array.
Example:

findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]) // returns [1, 9]
findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]) // returns ['Rob', 4]*/

let duplicateaaray = [];
function findduplicates(arr1){
    arr1sliced = arr1.slice().sort();
    for(i=0;i<arr1sliced.length;i++){
        if(arr1sliced[i+1]===arr1sliced[i])
        {
        duplicateaaray.push(arr1sliced[i])
        }
    }
} 
findduplicates([1,8,2,5,1,9,1,9,8,2,3,2,1])
let A = new Set(duplicateaaray)
console.log(duplicateaaray)
console.log(A)

//if(duplicate_array.has(duplicate_array[0]>1)){
// duplicate_array.delete(duplicate_array[0])
//}

console.log(typeof(duplicateaaray))






















/*const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  } 
console.log(`The duplicates in array are ${findDuplicates([1,8,93,6,3,9,4,8,9,3,8,2]) }`);*/