
// function to draw line
    function drawLine(a){
    let line ="━"
    let string = ""
    for ( let i = 1; i <=a.length; i++){
     string += line 
    }
    return string;
    }
     console.log(drawLine("sabitha"));

// function to draw topborder
function drawtopborder(a){
    let topb ="┏"
    let topb1="┓"
    let string = ""
    for ( let i = 1; i <=a.length; i++){
        if(i==1){
            string=string+topb;
        }else if(i==a.length){
            string=string+topb1;
        }else{
            string=string+drawLine("sabitha")
        }
    return string;
    }
}
    console.log(drawtopborder("sabitha"));


//function to drawmiddle border
function drawmiddleline(a){
    let start="┣"
    let end="┫"
    let string =""
    for ( let i = 1; i <=a.length; i++){
        if(i==1){string=string+start;
        }else if(i==a.length){
            string=string+end;
        }else{
            string=string+drawLine("sabitha")
        }
    return string;
    }
}
    console.log(drawmiddleline("sabitha"));

