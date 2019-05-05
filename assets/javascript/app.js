

var correctAnswers =0;
var wrongAnswers= 0;
var intervalId;



$(document).ready(function() {


    $("#button").on("click", function(){

       $('.container').remove('.container'); 

        $(".hidden").removeClass(["hidden"]);

        var number = 60;

        var intervalId;
    
        function run() {
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
        }
    
        function decrement() {
    
          number--;
    
          $(".timeCounter").html("<h2>" + "Time remaining: " +  number + '<h2>');
    
          if (number === 0) {
    
            stop();

            alert("Time is up");
    
            location.reload()
          }
        }
    
        function stop() {
    
          clearInterval(intervalId);
        }
    
        run();


    });




    $("#buttonSubmit").on("click", function(){


        var q1 = $("input[name='q1']:checked").val(); 
        var q2 = $("input[name='q2']:checked").val();
        var q3 = $("input[name='q3']:checked").val();
        var q4 = $("input[name='q4']:checked").val();
        var q5 = $("input[name='q5']:checked").val();
        var q6 = $("input[name='q6']:checked").val();
        var q7 = $("input[name='q7']:checked").val();
        var q8 = $("input[name='q8']:checked").val();
        
        if ( q1 === "Tim Robbins") {
            correctAnswers ++;
        
        } else{
            wrongAnswers ++;
        
        };
        
        if ( q2 === "White Russian"){
            correctAnswers ++;
        } else {
        
            wrongAnswers ++;
        };
        
        if ( q3 === "Dagobah") {
            correctAnswers ++;
        
        } else{
            wrongAnswers ++;
        
        };
        if ( q4 === "Smalls") {
            correctAnswers ++;
        
        } else{
            wrongAnswers ++;
        
        };
        if ( q5 === "Invests in Apple") {
            correctAnswers ++;
        
        } else {
            wrongAnswers ++;
        
        };
        
        if ( q6 === "Chisolm, MN") {
            correctAnswers ++;
        
        } else{
            wrongAnswers ++;
        
        };
        
        if ( q7 === "The One") {
            correctAnswers ++;
        
        } else{
            wrongAnswers ++;
        
        };
        
        if ( q8 === "Freedom") {
            correctAnswers ++;
        
        } else{
            wrongAnswers ++;
        
        };

        console.log(correctAnswers)
        console.log(wrongAnswers)

        alert("Number Correct: " + correctAnswers)
        alert("Number Wrong: " + wrongAnswers)

        location.reload()
        });
        
        
    




});

// On start button click fill container div with questions and start counter

// Allow only one selection at a time


// Check correct answers with if statements
// If correct increment correct answer counter
// If false imcrement wrong answer counter

// Game ends by either timing out or done button

// Restart Game