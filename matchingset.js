/*Create a function, matchingSet, that takes two arrays as arguments. It should return an array of all the elements that are shared between the two arrays (without duplicates). Effectively, it should return the intersection of both arrays.

Example:

matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]) // [3, 4]
matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']) // ['j', 'n']*/

let arr3 = [];
function matchingset(arrA,arrB){
      for(let i=0;i<arrA.length;i++){
          for(let j=0;j<arrB.length;j++){
              if(arrA[i]===arrB[j])
              {
              arr3.push(arrA[i]);
              }
          }
      }
}
matchingset(["s","a","b","h","a","a","c"],["a","b","c","c","a","h","c"])
var A = new Set(arr3)
console.log(A)
console.log(arr3)

        g