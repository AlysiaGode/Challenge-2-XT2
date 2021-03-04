function timeToday() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	var year = date.getFullYear();
	var month = date.getMonth() + 1; 
	var day =  date.getDate();

	var timeOfDay;
    
    //zorg dat alle getallen onder de 10 een 0 krijgen: 01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09
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


// var i = 0;
// function changeSky() {
//   var document.body = document.getElementById("document.body");
//   var morning = "radial-gradient(ellipse at center, #ff6f00 0%, #ffae00 60%, #ffd900 100%)";
//   var day = "radial-gradient(ellipse at center, #ffe600 0%, #fff700 60%, #ffff00 100%)";
//   var evening = "radial-gradient(ellipse at center, #2d08ff 0%, #25109e 60%, #0c014a 100%)";
//   var night = "radial-gradient(ellipse at center, #011b42 0%, #010f24 60%, #000103 100%)";
//   var color = [morning, day, evening, night];
//   document.body.style.background = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(changeSky, 86400000);

var mountainBackImg = document.getElementById("mountainBack");
var mountainMiddleImg = document.getElementById("mountainMiddle");
var mountainFrontImg = document.getElementById("mountainFront");
var currentTime = new Date().getHours();
      //night
      if (0 <= currentTime&&currentTime < 5) {
       		document.getElementById("sun").style.display = "none";
	   		document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #011b42 0%, #010f24 60%, #000103 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-night.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-night.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-night.png";
	   		console.log("night" + currentTime);
      }
	  
	  //morning
	  if (5 <= currentTime&&currentTime < 11) {
       		document.getElementById("sun").style.display = "block";
	   		document.getElementById("moon").style.display = "none";
	   		document.body.style.background = "radial-gradient(ellipse at center, #ff6f00 0%, #ffae00 60%, #ffd900 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-morning.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-morning.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-morning.png";
	   		console.log("morning" + currentTime);
      }
	  
	  //day
      if (11 <= currentTime&&currentTime < 17) {
       		document.getElementById("sun").style.display = "block";
	   		document.getElementById("moon").style.display = "none";
	   		document.body.style.background = "radial-gradient(ellipse at center, #ffe600 0%, #fff700 60%, #ffff00 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2.png";
	   		console.log("day" + currentTime);
      }
	  
	  //evening
      if (17 <= currentTime&&currentTime < 23) {
       		document.getElementById("sun").style.display = "none";
	   		document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #2d08ff 0%, #25109e 60%, #0c014a 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-earlynight.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-earlynight.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-earlynight.png";
	   		console.log("evening" + currentTime);
      }
	  
	  //early night
      if (23 <= currentTime&&currentTime < 24) {
	   		document.getElementById("sun").style.display = "none";
	   		document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #011b42 0%, #010f24 60%, #000103 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-night.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-night.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-night.png";
	   		console.log("earlynight" + currentTime);
      }

