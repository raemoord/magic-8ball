$(document).ready(function(){
	
    var magic8Ball = {};
        
    magic8Ball.listOfAnswers = ["It is certain!", "It is decidedly so!", "Without a doubt!", "Yes, definitely!", "You may rely on it.", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no.", "Definitely not!", "Outlook not good", "Very doubtful"];
        
        $("#answer").hide();
        
    magic8Ball.askQuestion = function (question) {
               $("#answer").fadeIn(4000);
    
               $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var randomAnswer = this.listOfAnswers[randomIndex];
        
        $("#8ball").effect( "shake" );
        $("#answer").text( randomAnswer );
        
    console.log(question);
    console.log(randomAnswer);
        
    };
         var onClick = function() {
             $("#answer").hide();
             $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
             setTimeout(
                   function() {
                      var question = prompt("Ask a yes or no question");
                       magic8Ball.askQuestion(question);
                 }, 500);
      
    };
        
    $("#questionButton").click( onClick );
        
    });