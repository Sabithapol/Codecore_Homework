function areValuesArray(arr){
    for(let i=0;i<arr.length;i++){
      if (!Array.isArray(arr[i])) {
        return false;
      }
    }
    //return "true"
    
  }
areValuesArray([1],[2],[7])
