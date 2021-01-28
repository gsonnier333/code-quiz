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
        console.log("Ended");
        return;
    }
    $("#question").text(questions[qNum]); //show the relevant questions
    
    //show the relevant answers on the buttons
    $("#btn1").text(option1[qNum]);
    $("#btn2").text(option2[qNum]);
    $("#btn3").text(option3[qNum]);
    $("#btn4").text(option4[qNum]);
}

function endGame(){
    if(timeLeft<0){
        $("#question").text("Sorry, you lost. Better luck next time!");
        $("#timer").text("Time's up!");
    }
    else{
        $("#question").text("Congrats, you win! Your score is " + timeLeft);
    }
    $(".choiceBtn").hide();
}

function startGame(){
    console.log("Started");
    $(".choiceBtn").show();
    timeLeft = 15;
    questionNumber = 0;
    $("#timer").text(timeLeft);
    console.log(timeLeft);
    var t = setInterval(function(){
        if(questionNumber>=questions.length){ //check if we're done before counting down
            console.log(timeLeft + " seconds left, good job!");
            $("#timer").text(timeLeft);
            endGame();
            clearInterval(t);
            return;
        }
        timeLeft--; //decrement time first
        if(timeLeft < 0){
            console.log("game over, time ran out");
            endGame();
            clearInterval(t);
            return;
        }
        $("#timer").text(timeLeft);
        console.log(timeLeft);
    }, 1000);
    ask(questionNumber);
}

function chooseOption(opt){
    if(opt === correctOption[questionNumber]){
        console.log("got it");
        questionNumber++;
        ask(questionNumber);
    }
    else{
        console.log("rip");
        timeLeft--;
        $("#timer").text(timeLeft);
    }
}

$("#startBtn").click(startGame);
$(".choiceBtn").click(function(){
    chooseOption(this.textContent);
})