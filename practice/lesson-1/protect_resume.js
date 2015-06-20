// HTML escape
// need to make sure that the < and > from their HTML get turned into harmless strings.

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
  var newHTML = _html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return newHTML;
};

console.log(charEscape(html));
