/*

//node toggle1.js HEN pp
const myArgs = process.argv.slice(2);
let result = [];
for(i=0;i<myArgs.length;i++){
    for(j=0;j<myArgs[i].length;j++){
    if(myArgs[i][j]===myArgs[i][j].toUpperCase()){
       result = result[i] + myArgs[i][j].toLowerCase()
    }else if(myArgs[i][j]===myArgs[i][j].toLowerCase()){
        result=result[i] + myArgs[i][j].toUpperCase()
    }
}
console.log(result)

}*/
/*Write a script `toggleCase.js` that takes a string as an argument then logs the string with the casing of each letter reversed. Lower case becomes upper case and vice versa.

Example Usage:

$ node toggleCase.js "What If Imps Were Real"

wHAT iF iMPS wERE rEAL*/


const myArgs = process.argv.slice(2);
let result = " ";
for(i=0;i<myArgs.length;i++){
    for(j=0;j<myArgs[i].length;j++){
    if(myArgs[i][j]===myArgs[i][j].toUpperCase()){
       result = result + myArgs[i][j].toLowerCase()
    }else if(myArgs[i][j]===myArgs[i][j].toLowerCase()){
        result=result + myArgs[i][j].toUpperCase()
    }
}
}
console.log(result)