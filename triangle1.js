const myArgs = process.argv.slice(2);
if(myArgs.includes(0)){
    console.log("not possible")
}
let perimeter = myArgs[0]+myArgs[1]+myArgs[2];
console.log(perimeter)
let Area = 0.5*(myArgs[0]*myArgs[2]);
console.log(Area)


