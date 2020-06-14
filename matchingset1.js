function matchingset(arrA, arrB){
    let arr3 = [];
    let i=0;
      for(let row=0;row<arrA.length;row++){
          for(let col=0;col<arrB.length;col++){
              if(arrA[row]===arrB[col])
              {
                arr3[i] = arrA[row];
                i++;
              }
          }
      }
        console.log(arr3)
        console.log(arr3.indexOf("c"))//only gives index of first c
        let j=1;
        for(i=0;i<arr3.length;i++){
          if(i===j){
            return false;
          }elseif(j<=arr3.length&&arr3[i]===arr3[j]){
             arr3.splice(j,1);
               j++;
          }
            console.log("nothing")
        console.log(arr3)
        }
}
matchingset(["s","b","h","c"],["a","b","c","h","c"])
//matchingset([1,0,3,3,2,5,4],[1,2,3,5,6])

//checking duplicates 
//console.log(arr3.indexOf("c"))
