/*

The median of a list of numbers is essentially its middle element after sorting. 
The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
*/

function compareNumbers(a, b) {
  return a - b;
}

function findMedian(arr) {
  const sortedArray = arr.sort(compareNumbers);
  const median = Math.floor(sortedArray.length / 2);
  return sortedArray[median];
}
