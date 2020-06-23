const myArgs = process.argv.slice(2);
let merged_array = [];
function mergeset(arr1,arr2){
    merged_array=arr1.concat(arr2)
    console.log(merged_array);
}
mergeset([1,2,3],[4,5,6])