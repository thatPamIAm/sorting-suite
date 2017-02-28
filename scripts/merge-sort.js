function mergeSort(array){
  if (array.length < 2) {
    return array
  } else {
    var middle = Math.floor(array.length/2)
    var leftArray = array.slice(0, middle)
    var rightArray = array.slice(middle)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
}


function merge(leftArray, rightArray){

  var completedArray = []
  while(leftArray.length && rightArray.length) { // we need to know that there are two arrays to compare.
    if(leftArray[0] < rightArray[0]) {
      completedArray.push(leftArray.shift());
    } else if (leftArray[0] > rightArray[0]){
      completedArray.push(rightArray.shift());
    }
  }
  return completedArray.concat(leftArray).concat(rightArray);
}


module.exports = mergeSort;
