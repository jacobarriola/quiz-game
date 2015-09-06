// Ask 5 questions
var questionOne = prompt('What is the capitol of California?');
var answerOne = 'sacramento';

var questionTwo = prompt('What is the capitol of New York?');
var answerTwo = 'new york';

var questionThree = prompt('What is the capitol of Arizona?');
var answerThree = 'phoenix';

var questionFour = prompt('What is 2 + 2?');
var answerFour = 4;

var questionFive = prompt('True/False: an apple is a fruit?');
var answerFive = 'true';

// Keep track of # of correct answers
var correctAnswers = 0;

if ( questionOne.toLowerCase() === answerOne ) {
  correctAnswers += 1;
}

if ( questionTwo.toLowerCase() === answerTwo ) {
  correctAnswers += 1;
}

if ( questionThree.toLowerCase() === answerThree ) {
  correctAnswers += 1;
}

if ( parseInt(questionFour) === answerFour ) {
  correctAnswers += 1;
}

if ( questionFive.toLowerCase() === answerFive ) {
  correctAnswers += 1;
}

// Final message for user showing correct # of answers
if (correctAnswers === 1) {
  var answers = 'answer';
} else {
  var answers = 'answers';
}

document.write('<p>You got ' + correctAnswers + ' ' + answers + ' correct.</p>');


// Rank: 5 = gold; 3-4 = silver; 1-2 = bronze; 0 = no badge

if (correctAnswers === 5) {
  var badge = 'gold';
} else if ( correctAnswers >= 3 ) {
  var badge = 'silver';
} else if ( correctAnswers >= 1 ) {
  var badge = 'bronze';
} else {
  var badge = false;
}
 if (!badge) {
   document.write('<p>Sorry, because you got 0 answers correct, you did not earn a badge.</p>');
 } else {
  document.write('<p>Congrats, you earned a ' + badge + ' badge!</p>');
}
