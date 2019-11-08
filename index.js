// //initialize variables to store current score and question
// let score = 0;
// let questionNum = 0;

// function renderStartView() {
//   // this function will be responsible for rendering the start view in
//   // the DOM
//   console.log('`renderStartView` ran');
// }

// function renderQuestionView {
//   // this function will be responsible for rendering the question view in
//   // the DOM
//   console.log('`renderQuestionView` ran');
// }

// function renderFeedbackView { 
//   // this function will be responsible for rendering the feedback view in
//   // the DOM
//   console.log('`renderFeedbackView` ran');
// }

// function renderFinalView {
//   // this function will be responsible for rendering the final view in
//   // the DOM
//   console.log('`renderFinalView` ran');
// }

// function checkAnswer {
//   // this function will be responsible for checking whether the submitted answer 
//   // is correct. It will call renderFeedbackView with different parameters depending 
//   // on correctness and incrementing the question count by 1 if correct
//   console.log('`checkAnswer` ran');
// }

// function updateScore {
//   // this function is responsible for incrementing the score by 1 and will be 
//   // called if the correct answer is submitted
//   score += 1;
//   console.log('`updateScore` ran');
// }

// // runs function to generate the quiz when the browser loads
// function renderQuiz () {
//   renderStartView();
// }

// $(renderQuiz);

//question database
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