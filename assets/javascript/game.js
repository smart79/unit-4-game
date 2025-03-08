$(document).ready(function() {
    var targetNumber="";
    var redValue="";
    var blueValue="";
    var yellowValue="";
    var greenValue="";
    var redBtn;
    var blueBtn;
    var yellowBtn;
    var greenBtn;
    var score;
    var wins=0;
    var loss=0;
    
    function initialize() {
        targetNumber=Math.floor(Math.random()*101)+19;
        // reset counter
        score=0;
        var crystal=[$(".red"), $(".blue"), $(".yellow"), $(".green")];
        var button=[redBtn, blueBtn, yellowBtn, greenBtn];
        // to assign value to each crystal
        // Ensure Bootstrap wrapper does not interfere with data assignment
        setTimeout(() => {
            for (var i=0; i<crystal.length; i++) {
                crystal[i].attr("data-value",Math.floor(Math.random()*12)+2);
            }
            console.log("Crystals assigned values:", 
                crystal[0].attr("data-value"), 
                crystal[1].attr("data-value"), 
                crystal[2].attr("data-value"), 
                crystal[3].attr("data-value")
            );
        }, 50); // Short delay to ensure proper assignment
        // to print out target number and score on screen
        $("#targetNumber").html(targetNumber);
        $("#wins").html(wins);
        $("#loss").html(loss);
        $("#score").html(score);
    }

    initialize();
    
    console.log(redValue +"<br>"+blueValue+"<br>"+yellowValue+"<br>"+greenValue);
    
    $(".crystal").on("click", function(){
        score += parseInt($(this).attr("data-value"));
        $("#score").html(score);
        if(score == targetNumber) {
            wins++;
            initialize();
        }
        else if (score > targetNumber) {
            loss++;
            initialize();
        }
    });

    // Wait for user interaction to start the background music
    // Ensure music function runs after everything is ready
    setTimeout(() => {
        document.getElementById("start-game").addEventListener("click", function () {
            let audio = document.getElementById("background-music");
            audio.play();
            document.getElementById("start-game").style.display = "none"; // Hide button after clicking
        });
    }, 100); // Slight delay to avoid interference

});