function fillRectangle(width,height,chr){
    this.width = width;
    this.height = height;
    this.chr = chr;
    let arr = [[]];
    for(let row=0;row<height;row++){
        for(let col=0;col<width;col++){
            arr[row][col]=chr;
        }
    }
}
fillRectangle(2,3,"*")
//console.log(arr)
//have to write another func also