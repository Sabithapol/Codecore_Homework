const myArgs = process.argv.slice(2);
for(i=0;i<myArgs.length;i++){
    let space = " ";
    console.log(space.repeat(i)  +   myArgs[i])
}