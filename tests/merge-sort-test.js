import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort';

describe('merge function', () => {

  it('should merge two arrays', () => {
    var array1 = [2];
    var array2 = [6]
    expect(Array.isArray(mergeSort(array1, array2))).to.be.true;
  });

  it('should return a numerical array that is sorted correctly', () => {
    var mergeSortMe = mergeSort([2, 4, 3, 1]);
    expect(mergeSortMe).to.deep.equal([1, 2, 3, 4]);
  });

  it('should return an alphabetical array that is sorted correctly', () => {
    var mergeSortMe = mergeSort(['d', 'a', 'c', 'b']);
    expect(mergeSortMe).to.deep.equal(["a", "b", "c", "d"]);
  });

  it('should not unsort a sorted array', function(){
    var mergeSortMe = mergeSort(['a', 'b', 'c', 'd']);
    expect(mergeSortMe).to.deep.equal(["a", "b", "c", "d"]);
  });

});
