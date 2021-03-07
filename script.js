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
			} 

			if (hours < 12) {
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
}

//laad meteen de pagina
timeToday();
checkTime();

//per seconde de nieuwe tijd weergeven
setInterval(function(){
	timeToday();
},1000);


textTime.onclick = function() {
		if (textTime.classList.contains("24HourClock")) {
			textTime.classList.remove("24HourClock");
			textTime.classList.add("12HourClock");
		} else if (textTime.classList.contains("12HourClock")) {
			textTime.classList.remove("12HourClock");
			textTime.classList.add("24HourClock");
		}
	}
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

var cloud1Img = document.getElementById("cloud2");
var cloud2Img = document.getElementById("cloud2");
var cloud3Img = document.getElementById("cloud3");
var cloud4Img = document.getElementById("cloud4");

var currentTime = new Date().getHours();
      function checkTime() {
      //night
      if (0 <= currentTime&&currentTime < 5) {
      //  		document.getElementById("sun").style.display = "none";
	   		// document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #4c6677 0%, #243038 60%, #0d1214 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-night.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-night.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-night.png";
	   		document.getElementsByClassName("starsBg").display = "block";
	   		cloud1.src = "Fotos/cloud-night.png";
	   		cloud2.src = "Fotos/cloud-night.png";
	   		cloud3.src = "Fotos/cloud-night.png";
	   		cloud4.src = "Fotos/cloud-night.png";
      }
	  
	  //morning
	  if (5 <= currentTime&&currentTime < 11) {
      //  		document.getElementById("sun").style.display = "block";
	   		// document.getElementById("moon").style.display = "none";
	   		document.body.style.background = "radial-gradient(ellipse at center, #936861 0%, #554855 60%, #262e4c 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-morning.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-morning.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-morning.png";
	   		document.getElementsByClassName("starsBg").display = "none";
	   		cloud1.src = "Fotos/cloud-morning.png";
	   		cloud2.src = "Fotos/cloud-morning.png";
	   		cloud3.src = "Fotos/cloud-morning.png";
	   		cloud4.src = "Fotos/cloud-morning.png";
      }
	  
	  //day
      if (11 <= currentTime&&currentTime < 17) {
      //  		document.getElementById("sun").style.display = "block";
	   		// document.getElementById("moon").style.display = "none";
	   		document.body.style.background = "radial-gradient(ellipse at center, #79aa9f 0%, #377979 60%, #005058 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2.png";
	   		document.getElementsByClassName("starsBg").display = "none";
	   		cloud1.src = "Fotos/cloud-day.png";
	   		cloud2.src = "Fotos/cloud-day.png";
	   		cloud3.src = "Fotos/cloud-day.png";
	   		cloud4.src = "Fotos/cloud-day.png";
      }
	  
	  //evening
      if (17 <= currentTime&&currentTime < 23) {
      //  		document.getElementById("sun").style.display = "none";
	   		// document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #9e6f4e 0%, #5e5352 60%, #314157 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-earlynight.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-earlynight.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-earlynight.png";
	   		document.getElementsByClassName("starsBg").display = "none";
	   		cloud1.src = "Fotos/cloud-earlynight.png";
	   		cloud2.src = "Fotos/cloud-earlynight.png";
	   		cloud3.src = "Fotos/cloud-earlynight.png";
	   		cloud4.src = "Fotos/cloud-earlynight.png";
      }
	  
	  //early night
      if (23 <= currentTime&&currentTime < 24) {
	   		// document.getElementById("sun").style.display = "none";
	   		// document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #4c6677 0%, #243038 60%, #0d1214 100%)";
	   		mountainBackImg.src = "Fotos/mountains-back-night.png";
	   		mountainMiddleImg.src = "Fotos/mountains-mid1-night.png";
	   		mountainFrontImg.src = "Fotos/mountains-mid2-night.png";
	   		document.getElementsByClassName("starsBg").display = "block";
	   		cloud1.src = "Fotos/cloud-night.png";
	   		cloud2.src = "Fotos/cloud-night.png";
	   		cloud3.src = "Fotos/cloud-night.png";
	   		cloud4.src = "Fotos/cloud-night.png";

      }
}

//per seconde de (switching) animaties weergeven
setInterval(function(){
	checkTime();
},1000);

var rain = document.getElementById("buttonRain");
var rainIcon = document.getElementById("rainIcon");
var rainW = document.getElementById("rainW");
rain.onclick = function(){
	if (rainIcon.classList.contains("fa-tint")) {
		rain.style.opacity = "1";
		rainIcon.classList.add("fa-tint-slash");
		rainIcon.classList.remove("fa-tint");
		rainW.style.display = "block";
		rain.style.boxShadow = "0px 0px 10px 5px white";
	} else if (rainIcon.classList.contains("fa-tint-slash")) {
		rain.style.opacity = "0.2";
		rainIcon.classList.remove("fa-tint-slash");
		rainIcon.classList.add("fa-tint");
		rainW.style.display = "none";
		rain.style.boxShadow = "none";
	}
}

var thunderIcon = document.getElementById("thunderIcon");
var thunder = document.getElementById("buttonThunder");
var lightning = document.getElementById("thunderFlash");

thunder.onclick = function(){
	if (thunderIcon.classList.contains("bolt")) {
		thunder.style.opacity = "1";
		thunderIcon.classList.add("noThunder");
		thunderIcon.classList.remove("bolt");
		lightning.style.display = "block";
		thunder.style.boxShadow = "0px 0px 10px 5px white";
	} else if (thunderIcon.classList.contains("noThunder")) {
		thunder.style.opacity = "0.2";
		thunderIcon.classList.remove("noThunder");
		thunderIcon.classList.add("bolt");
		lightning.style.display = "none";
		thunder.style.boxShadow = "none";
	}
}

