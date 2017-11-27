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
});

