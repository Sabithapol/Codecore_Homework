const myArgs = process.argv.slice(2);
let fibseries = [];
for(i=0;i<myArgs[0];i++){
    //let fibseries = [];
    if(i===0||i===1){
        fibseries[i] =1;
    }else {
        fibseries[i]=fibseries[i-1]+fibseries[i-2];
        
    }
}
console.log(fibseries);

