/*function wordcounts(input){
    const count = {};
    let word = input.split(" ");
    for(i=0;i<word.length;i++){
        for(j=1;j<word.length;j++){
            if(word[i]===word[j]){
                count[i]+=1;
            }else{
                count
            }
        }
    }
}
console.log(wordcounts(" this is this and that"))*/


function wordCounts(sentence) {
  const counts = {};

  const sentenceArray = sentence.split(" "); // [ 'this', 'is', 'this', 'and', 'that' ]

  for (let word of sentenceArray) {
    //   console.log("word: ", word);
    if (counts[word]) {
        // When using brackets to create a key-value pair,
        // you are allowed to use an expression inside of
        // the brackets. The value that is returned from 
        // the expression will be used a key.
      counts[word] += 1; // counts[word] = counts[word] + 1
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

const sentence = "this is this that and that";

console.log(wordCounts(sentence))