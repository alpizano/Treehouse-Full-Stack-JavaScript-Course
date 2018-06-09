var q1 = prompt('What is the color of the sky?');
var q2 = prompt('Is an strawberry a fruit or vegetable?');
var q3 = prompt('What is the best programming language?');
var q4 = prompt('Do birds walk or fly?');
var q5 = prompt('Do humans live on mars or earth?');
var totalScore = 0;

if (q1 == 'blue' ) {
    totalScore++;
    }
if (q2 == 'fruit' ) {
    totalScore++;
    }
if (q3 == 'JavaScript') {
    totalScore++;
    }
if (q4 == 'fly') {
    totalScore++;
    }
if (q5 == 'earth') {
    totalScore++;
    }
    

var crown = "";

if(totalScore === 5) 
  crown = 'Gold Crown';
  else if (totalscore>=3 && totalScore <= 4)
    crown = 'Silver Crown';
    
    else if (totalScore >=1 && totalScore <= 2)
      crown = 'Bronze Crown';
      else {
       crown = 'No Crown';
      }

alert("You got " + totalScore + " questions correct. You've earned a " + crown);