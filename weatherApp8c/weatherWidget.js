function WeatherWidget ($widget)
{
	this.update = function()
	{
		var lat = $("#latitude").val();
		var lon = $("#longitude").val();
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport(lat, lon);
	};
	
	function getWeatherReport(lat, lon)
	{
		var coords = lat + "," + lon;
		$.ajax({
		url: "https://api.weather.gov/points/" + coords + "/forecast",
		dataType : "json"
		})
			.done(function(data) {
				populateWeather(data);
		})
			.fail(function(jqXHR, textStatus, errorThrown) {
				showError(errorThrown);
			});
	}

			
	function populateWeather(data)
	{
		var observation = data.properties.periods[0];
		
		$(".results header img", $widget)
			.attr("src", observation.icon);
		$(".location>span", $widget)
			.text(observation.name);
		$(".conditions>span").each(function(i,e)
		{
			var $span = $(this);
			var field = $span.data("field");
			$(this).text(observation[field]);
		});
		$(".loading", $widget).fadeOut(function ()
		{
			$(".results", $widget).fadeIn();
		});
	}
	
	this.getLocation = function()
	{
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(
			function(position)
			{
				$("#latitude").val(position.coords.latitude);
				$("#longitude").val(position.coords.longitude);
			},
			function(error)
			{
				$("#controls .error")
					.text("ERROR: " + error.message)
					.slideDown();
			});
	}
		}	
		}