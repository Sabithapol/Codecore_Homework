function countchars(sentence){
    const counts = {}
    for(let a of sentence){
        if(counts[a]){
            counts[a]+=1
        }else{
            counts[a]=1
        }
    }
    return counts;
}
console.log(countchars("An archer"))