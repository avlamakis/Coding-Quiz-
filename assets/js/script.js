// array created with variable for questions
// Reference @Proprofs.com for questions/answers
var questions = [
    {
        title: "Of the following, if statements, which one correctly executes three instructions if the condition is true?",
        selections: [
            "A. If (x < 0) a = b * 2; y = x; z = a – y;",

            "B. if (x < 0){ a = b * 2; y = x; z = a – y;}",

            "C. If (x < 0) a = b * 2; y = x; z = a – y ;",

            "D. If (x < 0)  a = b * 2; y = x; z = a – y;"],
        answer: "B. if (x < 0){ a = b * 2; y = x; z = a – y;};"

    },
    {
        title: "_______ is the process of finding errors and fixing them within a program.",
        selections: [
            "A. Compiling",

            "B. Executing",

            "C. Debugging",

            "D. Scanning"],
        answer: "C. Debugging"
    },

    {
        title: "Which command will stop an infinite loop?",
        selections: [
            "A. Alt - C",

            "B. Shift - C",

            "C. Esc",

            "D. Ctrl - C"],
        answer: "D. Ctrl - C"
    },

    {
        title: "A loop that never ends is referred to as a(n)_________.",
        selections: [
            "A. While loop",

            "B. Infinite loop",

            "C. Recursive loop",

            "D. ) for loop"],
        answer: "B. Infinite loop"
    },

    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        selections: [
            "A. commas",
            "B. curly brackets",
            "C. quotes",
            "D. parenthesis"],
        answer: "C. quotes"
    }

];

// initial variable for score 
var score = 0
var questionCollection = 0

// timer function variables
var challengeTimer = document.querySelector("#challengeTimer")
var timer = document.querySelector("#startChallenge");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Time Left Variables
var remainingTime = 61;
// holds the time 
var containTime = -1;
// creation of new Unorded list element for questions array
var ulCreate = document.createElement("ul");
// sets the penalty
var penalty = 5;

// function to create timer and display on click 
timer.addEventListener("click", function () {
    if (containTime === -1) {
        containTime = setInterval(function () {
            remainingTime--;
            challengeTimer.textContent = "Time:" + remainingTime;

            if (remainingTime <= -1) {
                clearInterval(containTime);
                complete();
                challengeTimer.textContent = "Time's Up";
            }

        }, 1000);
    }
    display(questionCollection);
});

var validation = function (){};

// displays questions after click event
function display(questionCollection) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // initial for loop to go through array of questions
    for (var i = 0; i < questions.length; i++) {
        var inputtedQuestions = questions[questionCollection].title;
        var inputtedSelections = questions[questionCollection].selections;
        questionsDiv.textContent = inputtedQuestions;
    }
    // New for loop using forEach to create the questions/answers
    // utilized github and w3 sources to uncover .forEach to use to loop through the array of questions
    inputtedSelections.forEach(function (newQuestion) {
        var listItem = document.createElement("li");
        listItem.textContent = newQuestion;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (validation));
    })
};

// function event to compare the selected answer to the selections available
function validation(event) {
    var confirmation = event.target;

    if (element.correct("li")) {

        var formInput = document.createElement("div");
        formInput.setAttribute("id", "formInput");
        // Correct condition 
        if (confirmation.textContent == questions[questionCollection].answer) {
            score++;
            formInput.textContent = "Correct. The answer is:  " + questions[questionCollection].answer; 
        } else {
            // else statement to apply penalty of the 5 seconds to the timer
            remainingTime = remainingTime - penalty;
            formInput.textContent = "Wrong. The answer is: " + questions[questionCollection].answer;
        }

    }
    // question collection function declared here with ++ to determine the question the user is on
    questionCollection++;

    if (questionCollection >= questions.length) {
        // complete will provide the user with their final score
        complete();
        formInput.textContent = "The End!" + " " + "You got a score of  " + score + "/" + questions.length + " Correct!";
    } else {
        display(questionCollection);
    }
    questionsDiv.appendChild(formInput);

};





