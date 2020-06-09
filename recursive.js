/*const factorial = n =>{
    let fact=1;
    if(n==0||n==1){
        return fact;
    }for(i=2;i<=n;i++){
     fact = fact*i
    }
    return fact;  
}

console.log(factorial(4))*/


const factorial = n =>{
    let fact=1;
    if(n==0||n==1){
        return fact;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(4))