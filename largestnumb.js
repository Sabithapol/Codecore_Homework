function largestNumber(arr){
    let result = 0;
    for(let i=0;i<arr.length;i++){
        //let result = 0;
       if(arr[i]>result){
           result=arr[i];
       }
    }
    console.log(result)
}
largestNumber([40,2,13,34,42])
largestNumber([99, 77, 55, 33, 22, 11])