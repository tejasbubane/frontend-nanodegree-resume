// If given a string of a two word name formatted with any mix of capitalization,
// can you manipulate the string to ensure the first name has a capital first
// letter and the last name is totally capitalized? Assume there's a space between
// the names. For instance, turning a string like "cAmEROn PittMAN" into
// "Cameron PITTMAN". Your answer should be a single string saved to the variable
// called finalName.

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var finalName = oldName;

  var firstName = oldName.split(" ")[0];
  var lastName = oldName.split(" ")[1];
  var firstChar = firstName.charAt(0);

  finalName = firstChar.toUpperCase() + firstName.slice(1).toLowerCase() +
              " " + lastName.toUpperCase();
  return finalName;
}

console.log(nameChanger(name));
