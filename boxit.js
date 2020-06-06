/*function drawline(name){
    let line= "─";
    let i=1;
    while(i<=name.length){
        return line * i;
        i++;
    }

}
drawline("sabitha")*/

function drawLine(name){
    let line ="━"
    let string = ""
    for ( let i = 0 ; i < name.length ; i++){
     string += line 
    }
    return string 
    }
    console.log(drawLine('Sabitha'));
    console.log("sabitha");