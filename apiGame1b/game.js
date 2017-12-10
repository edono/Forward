$(document).ready(function() {
   function getQuestion()
	{
		$.ajax({
		url: "http://jservice.io/api/random",
		dataType : "json"
		})
			.done(function(data) {
				questionResults(data);})
				
			.fail(function(){$("#error").text("Failed to load question");});
		
	}
	$('#triv1').click(function() {
			 getQuestion();
			calculateResults(expertChosen, wager);
			 });
			 
	function questionResults(data)
	{
	var questionData = data;
	var question = questionData[0].question;
	var answer = questionData[0].answer;
	var category = questionData[0].category.title;
	$("#question").text("Question : " + question);
	$("#category").text("Category : " + category);
	$("#answer").text("Answer : " + answer);
	}	
	
	$("#choosepat").click(function() 
	{
		expert = "Patrick Star ";
			 
	});
	
	$("#choosejoe").click(function() 
	{
		expert = "Average Joe ";
			 
	});
	
	$("#choosehawking").click(function() 
	{
		expert = "Stephen Hawking ";
			 
	});
	 $("#enterBet").click(function() 
	{
		if (expert == "notSet")
		{
		$("#choice").html("Please select someone to answer your trivia question before placing a wager");
		}
		else
		{}
	});
	$("#confirmBet").click(function() 
	{
		
		if (expert == "notSet")
		{
		$("#choice").html("Please select someone to answer your trivia question before placing a wager");
		}
		else if (!confirmReady)
		$("#choice").html("Sorry you aren't ready to confirm yet, please place a valid wager");
	});
	var balance = 1000;
	var expert = "notSet";
		$("#balance").text("Current balance: $" + balance);
		
		
		var wager;
		var confirmReady = false;
		var expertChosen;
		$("#enterBet").click(function() 
		{
			wager = Math.round($("#wager").val()* 100) / 100;
			confirmReady = false;
			expertChosen = expert;
			$("#choice").html("This question will be answered by " + expertChosen + "<br/>" + "Please enter a wager for this round");
			
			confirmReady = false;
			wager = Math.round($("#wager").val()* 100) / 100;
			if (balance >= wager && wager > 0)
			{
				$("#choice").html("Wager accepeted, you have bet $" + wager +"<br/>"+ "Click the confirm wager button when ready");
				confirmReady = true;
			}
			else if (balance == 0)
			{
				$("#choice").html("Sorry you are out of money and cannnot continue");
			}
			else if(wager > balance)
			{
				$("#choice").html("Please place a wager that is smaller than or equal to your balance shown above");
			}
			else if (wager <= balance)
			{
				$("#choice").html("Please place a wager that is larger than $0");
			}					 
			});
			
			$("#confirmBet").click(function() 
		{
			if (confirmReady == false)
			{
				$("#choice").text("Sorry you aren't ready to confirm yet, please place a valid wager");
			}
			else if(confirmReady == true)
			{
				getQuestion();
				if (expertChosen == "Patrick Star ")
				{
					wager = $("#wager").val();
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll <= 15)
					{
						var winnings = Math.round(wager * 0.9 * 100) / 100;
						balance = Number(winnings) + Number(balance);
						balance = Math.round(balance * 100) / 100;
						$("#balance").html("Patrick answered the question correctly so you have won your wager back plus $" + winnings  + " in winnings"+ "<br/>" + "Your new balance is: $" + balance);
						$("#choice").html("To place another wager click on the enter wager button. " + "<br/>"
						+ "To exit and claim your balance click on the claim winnings button");
					}
					else
					{
						balance = Number(balance) - Number(wager);
						balance = Math.round(balance * 100) / 100; 
						$("#balance").html("Patrick answered the question incorrectly so you have lost your wager which was $" + wager  + "<br/>" + "Your new balance is: $" + balance);
						$("#choice").html("To place another wager click on the enter wager button. " + "<br/>"
						+ "To exit and claim your balance click on the claim winnings button");
					}
				}
				else if (expertChosen == "Average Joe ")
				{
					wager = $("#wager").val();
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll <= 50)
					{
						var winnings = Math.round(wager * 0.5 * 100) / 100;
						balance = Number(winnings) + Number(balance);
						balance = Math.round(balance * 100) / 100;
						$("#balance").html("Joe answered the question correctly so you have won your wager back plus $" + winnings  + " in winnings"+ "<br/>" + "Your new balance is: $" + balance);
						$("#choice").html("To place another wager click on the enter wager button. " + "<br/>"
						+ "To exit and claim your balance click on the claim winnings button");
					}
					else
					{
						balance = Number(balance) - Number(wager);
						balance = Math.round(balance * 100) / 100; 
						$("#balance").html("Joe answered the question incorrectly so you have lost your wager which was $" + wager  + "<br/>" + "Your new balance is: $" + balance);
						$("#choice").html("To place another wager click on the enter wager button. " + "<br/>"
						+ "To exit and claim your balance click on the claim winnings button");
					}
				}
				else if (expertChosen == "Stephen Hawking ")
				{
					wager = $("#wager").val();
					var roll = Math.floor((Math.random() * 100) + 1);
					if (roll <= 85)
					{
						var winnings = Math.round(wager * 0.1 * 100) / 100;
						balance = Number(winnings) + Number(balance);
						balance = Math.round(balance * 100) / 100;
						console.log(balance);
						$("#balance").html("Stephen Hawking answered the question correctly so you have won your wager back plus $" + winnings  + " in winnings"+ "<br/>" + "Your new balance is: $" + balance);
						$("#choice").html("To place another wager click on the enter wager button. " + "<br/>"
						+ "To exit and claim your balance click on the claim winnings button");
					}
					else
					{
						balance = Number(balance) - Number(wager);
						balance = Math.round(balance * 100) / 100; 
						console.log(balance);
						$("#balance").html("Stephen Hawking answered the question incorrectly so you have lost your wager which was $" + wager  + "<br/>" + "Your new balance is: $" + balance);
						$("#choice").html("To place another wager click on the enter wager button. " + "<br/>"
						+ "To exit and claim your balance click on the claim winnings button");
					}
				}
			}
			confirmReady = false;
		});
	
	$("#doneButton").click(function() 
	{
		if (balance > 0)
		{
		$("#balance").text("You have claimed $" + balance);
		$("#choice").text("You are welcome to play again another time");
		}
		
	});
	$("#doneButton").text("Click to claim winnings");
	$("#choice").text("Please select someone to answer your trivia question");
});
		
	