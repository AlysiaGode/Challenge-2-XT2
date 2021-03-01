function timeToday() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	var year = date.getFullYear();
	var month = date.getMonth() + 1; 
	var day =  date.getDate();

	var timeOfDay;
    
    //zorgt dat alle getallen onder de 10 een 0 krijgen: 01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09
    if (hours < 10) {
    	hours = "0" + hours;
    } 
    if (minutes < 10) {
    	minutes = "0" + minutes;
    }
    if (seconds < 10) {
    	seconds = "0" + seconds;
    }

    if (year < 10) {
    	year = "0" + year;
    } 
    if (month < 10) {
    	month = "0" + month;
    }
    if (day < 10) {
    	day = "0" + day;
    }

    var textTime = document.getElementById("textTime");
    var textDate = document.getElementById("textDate");

    	if (textTime.classList.contains("12HourClock")) {
			//bepaal de tijdsweergave aan de hand van het tijdstip van de dag AM of PM
			if (hours == 0) {
				hours = 12;
				timeOfDay = "AM";
			} else if (hours > 12) {
			    hours = hours - 12;
			    timeOfDay = "PM";
			    if (hours < 10) {
    				hours = "0" + hours;
    			}
			}
		
			textTime.innerHTML = hours + ":" + minutes + ":" + seconds + timeOfDay;
			textDate.innerHTML = year + "-" + month + "-" + day;

		} else if (textTime.classList.contains("24HourClock")) {
			textTime.innerHTML = hours + ":" + minutes + ":" + seconds;
			textDate.innerHTML = day + "-" + month + "-" + year;
		}

	textTime.onclick = function() {
		if (textTime.classList.contains("24HourClock")) {
			textTime.classList.remove("24HourClock");
			textTime.classList.add("12HourClock");
		} else if (textTime.classList.contains("12HourClock")) {
			textTime.classList.remove("12HourClock");
			textTime.classList.add("24HourClock");
		}
	}
}

//per seconde de nieuwe tijd weergeven
setInterval(function(){
timeToday();
},1000);
