var randomNum = Math.floor((Math.random() * 10000 ) + 1);
document.write('<h1>' + randomNum + '</h1>' + '<br>');
var test = 7;
var i = 0;
var newRandom = 5;

while ( newRandom !== randomNum) {
  newRandom = Math.floor((Math.random() * 10000 ) + 1);
  i++;
}
document.write('The random number was ' + newRandom + '<br>');
document.write('It took the computer ' + i + ' attempts to get that right.');
