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
var wrapper = document.querySelector("#wrapper");
var timer = document.querySelector("#startChallenge");
var questionsDiv = document.querySelector("#questionsDiv");

// Time Left Variables
var remainingTime = 61;
// holds the time 
var containTime = -1;
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
                challengeTimer.textContent = "Time's Up";
            }

        }, 1000);
    }
});


