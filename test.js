function drawtopborder(b){
    let topb ="┏"
    let topb1="┓"
    let string1 = ""
    let line ="━"
    for ( let i = 1; i <=b; i++){
        if(i==1){
            string1=string1+topb;
        }else if(i<19){
            string1=string1+line;
        }else{
            string1=string1+topb1;
        }
    return string1;
    }
}
    console.log(drawtopborder(19));