const stringreverse = n =>{
    revstring = "";
    if(n.length==0){
        return revstring;
    }
    for(i=n.length-1;i>=0;i--){
        revstring = revstring + n[i];
    }
}
console.log(stringreverse("sabitha")) 
