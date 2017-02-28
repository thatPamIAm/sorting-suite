function bubbleSort(array){
// do loop with that condition that for loop will continue to
// run inside for loop until nothing in the array is swapped
  do {
    var swapped = false;
    for(var i = 0; i < array.length; i++) {
      var current = array[i];
      if(current > array[i+1]) {
       array[i] = array[i+1];
       array[i+1] = current;
       swapped = true;
    }
  }
} while(swapped === true);
  return(array);
}

module.exports = bubbleSort;
