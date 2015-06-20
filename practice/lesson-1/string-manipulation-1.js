// Using string methods, convert "audacity" to "Udacity".

var s = "audacity";

var udacityizer = function(input) {
  var newS = input.slice(1);
  return newS.charAt(0).toUpperCase() + newS.slice(1);
};

console.log(udacityizer(s));
