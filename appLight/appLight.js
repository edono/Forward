var isOn = false;

function toggleSwitch(div) {
	isOn = !isOn;
	//change page background
	
	document.documentElement.style.background = isOn ? "white" : "black";
	//change state text
	var state = document.getElementById("state");
	state.innerHTML = isOn ? "On" :  "Off";
	state.style.color = isOn ? "black" : "white";
	//change switch
	
	var button = document.getElementById("button");
	if (isOn) {
		button.classList.add("on");
	} else {
		button.classList.remove("on");
	}
}