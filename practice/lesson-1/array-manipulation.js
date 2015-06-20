// If you are given an array of numbers, can you increase the value of the last
// number in the array by one?

var sampleArray = [0, 0, 7];

var incrementLastArrayElement = function(_array) {
  var newArray = _array.slice(0); // create copy

  var lastElement = newArray.pop();
  newArray.push(lastElement + 1);

  return newArray;
};

console.log(incrementLastArrayElement(sampleArray));
