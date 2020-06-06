//1. should i use a size so the box doesnot change with the length of name
//2. can i use arrays 
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

//function to draw bottomborder
function drawBottomborder(a){
    let start="┗"
    let end="┛"
    let string=""
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
    console.log(drawBottomborder("sabitha"));

// function for bars around 
function barsaround(a){
    let bar="┃"
    let string =""
    for(i=0; i<=a.length+1; i++){
        if(i==0){
            string=string+bar
        }else if(i==a.length+1){
            string=string+bar
        }else{
            string=string+"a[i]";
        }
    return string;
    }
}
console.log(barsaround("sabitha"))
