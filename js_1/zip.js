function zip(arrA, arrB){
    //this.arrA = arrA;
    //this.arrB= arrB;
    let arr3 = [];
    if(arrA.length===arrB.length){
      for(let row=0;row<arrA.length;row++){
          for(let col=0;col<arrB.length;col++){
              if(row===col){
                arr3[row] = [arrA[row] , arrB[col]];
            }
          }
        }
    console.log(arr3);  
    }else
    return console.log("undefined");

}zip(['firstName', 'lastName'], ['Jon', 'Snow'])