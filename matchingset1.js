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
arr4 = arr3.sort();  
for(i=0;i<arr4.length;i++){
  if(arr4[i+1]==arr4[i]){
  arr4.splice(i,1) 
  }
}
console.log(arr4)

        