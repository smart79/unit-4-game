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
        for (var i=0; i<crystal.length; i++) {
            button[i]=crystal[i].attr("data-value", Math.floor(Math.random()*12)+2);
        };
        // to print out target number and score on screen
        $("#targetNumber").html(targetNumber);
        $("#wins").html(wins);
        $("#loss").html(loss);
        $("#score").html(score);
    }
    initialize();
    
    console.log(redValue +"<br>"+blueValue+"<br>"+yellowValue+"<br>"+greenValue);
    
    $(".crystal").on("click", function(){
        let audio = document.getElementById("background-music");

        // Play music when clicking a crystal, only if it's not already playing
        if (audio.paused) {
            audio.play();
        }

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
    
});