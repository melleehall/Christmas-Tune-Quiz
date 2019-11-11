'use strict';

// question and answer database
const STORE = [
    {
      question: 'In the original "How the Grinch Stole Christmas", voice actor, Thurl Ravenscroft, performed all of the musical numbers even though Boris Karloff narrated the story.  Ravenscroft also provided the voice of what famous TV commercial character?',
      answers: [
        'Toucan Sam',
        'Chester Cheetah',
        'Tony the Tiger',
        'Kool-Aid Man'
      ],
      correctAnswer:
        'Ravenscroft voiced Tony the Tiger for Kellogg\'s Frosted Flakes commercials - isn\'t that greaaaatttttt?'
    },
    {
        question: 'In December of 1965, astronauts Walter “Wally” Schirra Jr. and Thomas P. Stafford took out a harmonica and played the first song to be performed in space.  What holiday tune did they play?',
        answers: [
          'Jingle Bells',
          'Frosty the Snowman',
          'Rudolf, the Red-nosed Reindeer',
          'Let It Snow! Let It Snow! Let It Snow!'
        ],
        correctAnswer:
          'After meeting for multiple practice sessions on planet Earth, Schirra and Stafford sang Jingle Bells while orbiting Gemini 6 much to the surprise of Mission Control.'
    },
    {
        question: 'What was \'Do You Hear What I Hear?\' inspired by?',
        answers: [
          'An approaching band of drummers announcing the commencement of battle',
          'An old astrological tale',
          'The Fourth of July',
          'The Cuban Missile Crisis'
        ],
        correctAnswer:
          '\'Do You Hear What I Hear\' was originally written by a husband and wife as a \'prayer for peace\' during the Cuban Missile Crisis and the \'star as big as a kite\' line was written in reference to a missile.'
    },
    {
        question: '“Rudolph The Red-Nosed Reindeer,” “Rockin’ Around The Christmas Tree,” and “Holly Jolly Christmas” are three of the most famous Christmas songs.  Which interesting fact about them below is true?',
        answers: [
          'All three songs were written explicitly for use in plays',
          'All three songs were made famous by Gene Autry',
          'All three songs were written by a Jewish man.',
          'All three songs were originally criticized by Top 40 radio personality "Big Daddy" Tom Donahue for plagarism of chord progressions.'
        ],
        correctAnswer:
          'Johnny Marks is most famously remembered for writing all three songs.  He was Jewish and not exactly thrilled about this being his claim to fame.  He got his first songwriting gig, because his brother-in-law wrote the original Rudolf story.'
    },
    {
        question: 'The first song to mention Santa Claus was which of the following?',
        answers: [
          'Here Comes Santa Claus',
          'Santa Baby',
          'Up On The House Top',
          'Santa Claus Is Comin\' To Town'
        ],
        correctAnswer:
          'Written in 1864, \'Up On The House Top \' mentions \'St. Nick\' aka Santa Claus.  Before that, Christmas carols were mostly about Jesus\' birth.'
    },
    {
        question: 'What was the profession of the man who in the husband/wife due who originally sang \'Grandma Got Run Over By A Reindeer\'?',
        answers: [
          'Zoologist',
          'Marine Biologist',
          'Animal Nutritionist',
          'Veterinarian'
        ],
        correctAnswer:
          'Ironically, Elmo Shropshire, who was asked to sing \'Grandma Got Run Over By A Reindeer\' by writter, Randy Brooks along with his wife, Patsy, was a licensed veterinarian.'
    },
  ];

// Performance feedback displayed in Final View based on quiz score
let rank = [
  {
    score: 'low',
    feedback: 'Based on your Christmas Tunes Trivia knowledge, you seem like a bit of a Scrooge.  Hopefully, you learned something and your love of tunes grew three sizes today - just like the Grinch\'s heart.'
  },
  {
    score: 'average',
    feedback: 'When it comes to Christmas Tunes Trivia, you\'re an average bear...or, well, reindeer... but you\'ve got potential, kid!'
  },
  {
    score: 'high',
    feedback: 'Move over Saint Nick, there\'s a new king of Christmas in town!  You must live and breathe the sounds of the season - congratulations!'
  },
];

// //initialize variables to store current score and question
let score = 0;
let questionNum = 1;

function renderChristmasTunesQuiz () {
  $('.score-question, .questions, .feedback, .final-view').addClass("js-hide");
  $('.instructions').removeClass("js-hide");
  $('button').text('START');
  $('.js-questionNum').text(questionNum);
  $('button').click(function () {
    renderQuestionView();
  });
  console.log('`renderChristmasTunesQuiz` ran');
}

// this function generates what is displayed in the form
function generateQuestion (currentQuestion) {
  $('.question').text('Testing question text');
  $('.ans-1').text('hold answer 1');
  $('.ans-2').text('hold answer 2');
  $('.ans-3').text('hold answer 3');
  $('.ans-4').text('hold answer 4');
  console.log('`generateQuestion` ran');
}

function renderQuestionView () {
  // this function will be responsible for...
  // hiding the instructions
  $('.instructions, .feedback').addClass("js-hide");
  $('.score-question, .questions').removeClass("js-hide");
  generateQuestion();
  $('button').text('SUBMIT');
  $('button').click(function () {
    renderFeedbackView();
  });
  // showing the form with questions and radio answers
  // changing the class of the button to "js-submit-response" and the button text to "SUBMIT"
  console.log('`renderQuestionView` ran');
}

function renderFeedbackView (isAnswerCorrect) { 
//   // this function will be responsible for...
//   // hiding the form with questions and radio answers
    $('.questions, .final-view').addClass("js-hide");
    $('.feedback').removeClass("js-hide");
    $('button').text('NEXT');
    $('button').click(function () {
      if (questionNum < STORE.length) {
        updateQuestionNum();
        renderQuestionView();
      } else {
        renderFinalView ();
      };
    })
  console.log('`renderFeedbackView` ran');
}

function renderFinalView () {
//   // this function will be responsible for...
//   // hiding the happy or sad image, "correct"/"incorrect"/, and correct answer
  $('.feedback').addClass("js-hide");
  $('.final-view').removeClass("js-hide");
  $('button').text('PLAY AGAIN');
  if (score > 4) {
    $('span.quiz-rank').text('high score');
  } else if (score > 2) {
    $('span.quiz-rank').text('medium score');
  } else {
    $('span.quiz-rank').text('low score');
  }
  $('button').click(function () {
    questionNum = 1;
    renderChristmasTunesQuiz()
  });
  console.log('`renderFinalView` ran');
}

function checkAnswer () {
// this function will be responsible for checking whether the submitted answer 
// is correct and passing a yes or no to renderFinalView
  console.log('`checkAnswer` ran');
}

function updateScore () {
// this function will be called if the correct answer is submitted
  score ++;
  $('.js-score').text(score);
  console.log('`updateScore` ran');
}

function updateQuestionNum () {
// this function is called when the (NEXT) button is clicked in the feedback view
  questionNum ++;
  $('.js-questionNum').text(questionNum);
  console.log(questionNum);
}

// runs function to generate the quiz when the browser loads
$(renderChristmasTunesQuiz);



// Still need to do...
// display Q&A's 
// build function that checks whether the submitted answer is correct
// fix question counter to increment by 1

