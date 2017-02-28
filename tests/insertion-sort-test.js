import { expect } from 'chai';
import insertionSort from '../scripts/insertion-sort';

  describe('insertSort function', () => {
    it('should return an array', () => {
      expect(Array.isArray(insertionSort([]))).to.be.true;
    });

    it('should return a numerical array that is sorted correctly', () => {
      var insertionSortMe = insertionSort([3, 4, 2, 1])
      expect(insertionSortMe).to.deep.equal([1, 2, 3, 4])
    });

    it('should return an alphabetical array that is sorted correctly', () => {
      var insertionSortMe = insertionSort(['d', 'a', 'c', 'b'])
      expect(insertionSortMe).to.deep.equal(["a", "b", "c", "d"])
    });

    it('should not unsort a sorted array', function(){
      var insertionSortMe = insertionSort(['a', 'b', 'c', 'd'])
      expect(insertionSortMe).to.deep.equal(["a", "b", "c", "d"])
  });

});
