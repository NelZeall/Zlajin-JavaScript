var testValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var reversed = testValue.split(' ').reverse().join(' ');

document.write(testValue.length + " " + "letters in text" + "</br>" + "</br>");
document.write(testValue.split(" ").length + " " + "words in text" + "</br>" + "</br>");
document.write(testValue + "</br>" + "</br>");
document.write(reversed);
