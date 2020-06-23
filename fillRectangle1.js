/*Write a function, fillRectangle, that takes 3 arguments: a number representing a width, another number representing a height and a single character string as chr. It must return a 2 dimensional array (i.e. an array containing array values of the same length.) of length width whose inner arrays are length height where the values of the inner arrays are filled with chr.

Example:

fillRectangle(2, 2, "*")
// [
//   ['*', '*'],
//   ['*', '*'],
// ]

fillRectangle(5, 3, "🔥")

// [
//   ['🔥', '🔥', '🔥', '🔥', '🔥'],
//   ['🔥', '🔥', '🔥', '🔥', '🔥'],
//   ['🔥', '🔥', '🔥', '🔥', '🔥'],
// ]*/


function fillRectangle(width,height,chr){
    this.width = width;
    this.height = height;
    this.chr = chr;
    let arr = [];
    for(let row=0;row<height;row++){
        for(let col=0;col<width;col++){
            arr.push(chr);
        }
    }console.log(arr)
}
fillRectangle(2,3,"*")
//have to write another func also