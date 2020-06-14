function printMulti(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
          console.log(array[i][j]);
        } 
    }
}

printMulti([[2,3,4], ["Hello CodeCore", 1, true]])