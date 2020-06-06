// function to draw line
    function drawLine(a){
    let line ="━"
    let string = ""
    for ( let i = 1; i <=a; i++){
     string += line 
    }
    return string;
    }
     console.log(drawLine(19));

// function to draw topborder
function drawtopborder(b){
    let topb ="┏"
    let topb1="┓"
    let string1 = ""
    for ( let i = 1; i <=b; i++){
        if(i==1){
            string1=string1+topb;
        }else if(i==19){
            string1=string1+topb1;
        }else{
            string1=string1+drawLine(19)
        }
    return string1;
    }
}
    console.log(drawtopborder(19));
//function to drawmissdle border
function drawmiddleborder(a){

}