const myArgs = process.argv.slice(2);
var a = myArgs.map(function(x){
    return parseInt(x,10);
})
if(myArgs.includes(0)){
    console.log("not possible")
}
console.log(typeof(myArgs[0]))
console.log(typeof(a[0]))
let perimeter = a[0]+a[1]+a[2];
console.log(perimeter)
let Area = 0.5*(myArgs[0]*myArgs[2]);
console.log(Area)


