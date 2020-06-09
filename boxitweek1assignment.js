function drawLine(number) {
    let line = '━';
    let string = '';
    for (let i = 1; i <= number; i++) {
      string += line;
    }
    return string;
  }
  // function to draw topborder
  function drawtopborder(number) {
    return '┏' + drawLine(number) + '┓';
  }
  //function to drawmiddle border
  function drawmiddleline(number) {
    return '┣' + drawLine(number) + '┫';
  }
  //function to draw bottomborder
  function drawBottomborder(number) {
    return '┗' + drawLine(number) + '┛';
  }
  // function for bars around
  function barsaround(name, largestNameLength) {
    let bar = '┃';
    let string = '';
    let extraSpaces = '';
    if (largestNameLength > name.length) {
      extraSpaces = ' '.repeat(largestNameLength - name.length);
    }
    return '┃' + name + extraSpaces + '┃';
  }
  //boxit function
  function boxit(nameArray) {
    let maxLength = 0
    for (let i = 0; i < nameArray.length; i++) {
      if(nameArray[i].length > maxLength) {
        maxLength = nameArray[i].length
      }
    }
    const numberOfNames = nameArray.length
    console.log(drawtopborder(maxLength) + "\n")
    for (let i = 0; i < numberOfNames; i++) {
      console.log(barsaround(nameArray[i], maxLength) + "\n")
    }
    console.log(drawBottomborder(maxLength) + "\n")
  }
  const myArgs = process.argv.slice(2);
  boxit(myArgs)
  boxit(["sabitha","jamie", "hohn"])