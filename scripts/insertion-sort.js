function insertionSort(array){
  for(var i = 1; i < array.length; i++){
    var current = array[i];
    for(var j = i-1; array[j] > current; j--){
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return array;
}


//shift elements to the right to a clear a spot in the array
module.exports = insertionSort;
