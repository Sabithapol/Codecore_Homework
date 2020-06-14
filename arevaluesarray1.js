function areValuesArray(arr){
    for(let i=0;i<arr.length;i++){
      if (!Array.isArray(arr[i])) {
        return "false"
        //console.log("false")
      }
    }
    return "true"
   // console.log("true")
  }
areValuesArray([1],[2],[4,5])
