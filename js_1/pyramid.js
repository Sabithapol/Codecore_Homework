const myArgs = process.argv.slice(2);
for(i=1;i<=myArgs[0];i++){
    let stringpyramid = "#"
    console.log(stringpyramid.repeat(i));
}