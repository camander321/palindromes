function wordCheck(word) {
  word = word.toLowerCase().replace(/ /g, "").replace(/[\W]/g, "");
  console.log(word);
  for (var i = 0; i < word.length/2; i++) {
    if (word.charAt(i) !== word.charAt(word.length-(i+1))) {
      return false;
    }
  } return true;
}

$(document).ready(function() {

  var word = prompt("Enter a palindrome");
  if (wordCheck(word) === true) {
    alert("nice palindrome, jerk");
  } else {
    alert("try again");
  }
});
