//questions in order
var questions = ["Pick yes", "Pick si"];
//options for each respective button held in arrays, corresponding to each question (first element in an array corresponds with first question, etc)
var option1 = ["yes", "no"];
var option2 = ["no", "no"];
var option3 = ["no", "si"];
var option4 = ["no", "no"];
var correctOption = ["yes", "si"]; //correct answers for each respective question, to be compared to chosen answer each time
var chosenOption = "";

var questionNumber = 0; //keep track of which question we're on
var timeLeft = 0;

function ask(qNum){
    if(qNum>=questions.length){ //if the question number is out of bounds
        console.log("That question doesn't exist!");
        return;
    }
    $("#question").text(questions[qNum]); //show the relevant questions
    
    //show the relevant answers on the buttons
    $("#btn1").text(option1[qNum]);
    $("#btn2").text(option2[qNum]);
    $("#btn3").text(option3[qNum]);
    $("#btn4").text(option4[qNum]);
    
    chosenOption="";
    // if(chosenOption===""){
    //     setTimeout(() => {
    //         ask(qNum);
    //     }, 1000);
    //     console.log("waiting...");
    //     return;
    // }
    setTimeout(() => {
        if(timeLeft<0){
            return;
        }
        if(chosenOption===""){
            console.log("waiting...");
            ask(qNum);
        }
    }, 1000);
    if(chosenOption===""){
        return;
    }
    if(timeLeft<0){
        console.log("rip");
        //todo: show results screen?
        return;
    }
    
    if(chosenOption!==correctOption[qNum]){
        timeLeft -= 2;
        console.log("wrong");
    }
    
    questionNumber++;
}

function startGame(){
    console.log("Started");
    timeLeft = 15;
    questionNumber = 0;
    var t = setInterval(function(){
        $("#timer").text(timeLeft);
        console.log(timeLeft);
        timeLeft--;
        if(timeLeft < 0){
            console.log("game over, time ran out");
            clearInterval(t);
        }
        if(questionNumber>=questions.length){
            console.log(timeLeft + " seconds left, good job!");
            clearInterval(t);
        }
    }, 1000);
    ask(questionNumber);
}

$("#startBtn").click(startGame);
$("#btn1").click(function(){
    chosenOption = $("#btn1").text();
    console.log(chosenOption);
})
$("#btn2").click(function(){
    chosenOption = $("#btn2").text();
    console.log(chosenOption);
})
$("#btn3").click(function(){
    chosenOption = $("#btn3").text();
    console.log(chosenOption);
})
$("#btn4").click(function(){
    chosenOption = $("#btn4").text();
    console.log(chosenOption);
})
