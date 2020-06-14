function ishomo(arr){
    const type = typeof arr[0];
    for (const element of arr) {
        if (typeof element !== type){
        return false + console.log("false");
    }
  }
return true + console.log("true");
}
ishomo([0,"7","y","abc"])