function toArray(obj){
   newarray = [];
   for (let key in obj){
        newarray.push([key,obj[key]])
    } 
}console.log(toArray({a: 1, b: 2, c:3}))