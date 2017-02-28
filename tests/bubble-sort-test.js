import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort';

  describe('bubbleSort function', () => {
    it('should return an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true;
  });

  it('should return a numerical array that is sorted correctly', () => {
    var bubbleSortMe = bubbleSort([2, 4, 3, 1]);
    expect(bubbleSortMe).to.deep.equal([1, 2, 3, 4]);
  });

  it('should return an alphabetical array that is sorted correctly', () => {
      var bubbleSortMe = bubbleSort(['d', 'a', 'c', 'b']);
    expect(bubbleSortMe).to.deep.equal(["a", "b", "c", "d"]);
  });

  it('should not unsort a sorted array', function(){
    var bubbleSortMe = bubbleSort(['a', 'b', 'c', 'd'])
    expect(bubbleSortMe).to.deep.equal(["a", "b", "c", "d"])
  });

});
