const myArgs = process.argv.slice[2];
//console.log("   Rolled : "+ Math.floor((Math.random()*6)+1));
//console.log(Math.floor((Math.random()*6)+1));
//console.log(myArgs[0]);
//let repeat = myArgs[0];
let Total = 0;
let noondie =0;
for(i=0;i<myArgs[0];i++){
    noondie = Math.floor((Math.random()*6)+1);
    console.log("Rolled : "+ noondie);
    Total += Total + noondie;
}
//console.log(Total/myArgs[0]);