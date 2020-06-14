const myArgs = process.argv.slice(2);
for(i=0;i<myArgs.length;i++){
    if(myArgs[i]===myArgs[i].toUpperCase()){
        console.log(myArgs[i].toLowerCase())
    }else if(myArgs[i]===myArgs[i].toLowerCase()){
        console.log(myArgs[i].toUpperCase())
    }
}