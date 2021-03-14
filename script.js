//zorg dat alle getallen onder de 10 een 0 krijgen: 01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09
function addLeadingZero(getal) {
	if (getal < 10) {
		getal = "0"+ getal;
	}
	return getal;
}

function timeToday() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	var year = date.getFullYear();
	var month = date.getMonth() + 1; 
	var day =  date.getDate();

	var timeOfDay;

    var textTime = document.getElementById("textTime");
    var textDate = document.getElementById("textDate");

    if (textTime.classList.contains("12HourClock")) {
		//bepaal de tijdsweergave aan de hand van het tijdstip van de dag AM of PM
		if (hours == 0) {
			hours = 12;
			timeOfDay = "AM";
		} else if (hours < 12) {
			timeOfDay = "AM";
		} else if (hours >= 12) {
			hours = hours - 12;
			timeOfDay = "PM";
		} 
		
		textTime.innerHTML = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds) + timeOfDay;
		textDate.innerHTML = addLeadingZero(year) + "-" + addLeadingZero(month) + "-" + addLeadingZero(day);

	} else if (textTime.classList.contains("24HourClock")) {
		textTime.innerHTML = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
		textDate.innerHTML = addLeadingZero(day) + "-" + addLeadingZero(month) + "-" + addLeadingZero(year);
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
	};

var mountainBackImg = document.getElementById("mountainBack");
var mountainMiddleImg = document.getElementById("mountainMiddle");
var mountainFrontImg = document.getElementById("mountainFront");

var cloud1Img = document.getElementById("cloud2");
var cloud2Img = document.getElementById("cloud2");
var cloud3Img = document.getElementById("cloud3");
var cloud4Img = document.getElementById("cloud4");

var forest = document.getElementById("forest");

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
	  else if (5 <= currentTime&&currentTime < 11) {
      //  		document.getElementById("sun").style.display = "block";
	   		// document.getElementById("moon").style.display = "none";
	   		document.body.style.background = "radial-gradient(ellipse at center, #ec6b69 0%, #f5aa93 40%, #90a3aa 100%)";
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
      else if (11 <= currentTime&&currentTime < 17) {
      //  		document.getElementById("sun").style.display = "block";
	   		// document.getElementById("moon").style.display = "none";
	   		document.body.style.background = "radial-gradient(ellipse at center, #e6f9ff 0%, #b3ecff 60%, #99e6ff 100%)";
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
      else if (17 <= currentTime&&currentTime < 20) {
      //  		document.getElementById("sun").style.display = "none";
	   		// document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #c55c38 10%, #c56d38 20%, #558cb2 100%)";
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
      else if (20 <= currentTime&&currentTime < 24) {
	   		// document.getElementById("sun").style.display = "none";
	   		// document.getElementById("moon").style.display = "block";
	   		document.body.style.background = "radial-gradient(ellipse at center, #c46a1e 0%, #3c4065 0%, #191e25 100%)";
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

var face = document.getElementById("buttonFace");
var eye = document.querySelectorAll(".eye");

function eyesMoving(){
	eye.forEach(function(eye){
		let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/2); 
		let y = (eye.getBoundingClientRect().top) + (eye.clientHeight/2); 
		let radian = Math.atan2(event.pageX - x, event.pageY - y);
		let rot = (radian *(180/Math.PI)*-1)+270;
		eye.style.transform = "rotate("+rot+"deg)";
	})
}

var rightEye = document.getElementById("eyeRight");
var leftEye = document.getElementById("eyeLeft");
var eyeRightClosed = document.getElementById("eyeRightClosed");
var eyeLeftClosed = document.getElementById("eyeLeftClosed");
var sleep = document.getElementById("sleep");
var mouthSleep = document.getElementById("mouthSleep");
var mouthAwake = document.getElementById("mouthAwake");

face.onmouseenter = function(){
	if (face.classList.contains("asleep")) {
		rightEye.style.display = "block";
		eyeRightClosed.style.display = "none";
		rightEye.style.marginLeft = "8px";
		rightEye.style.marginTop = "0px";
		eyeLeftClosed.style.marginLeft = "-59px";
		eyeLeftClosed.style.position = "relative";
		eyeLeftClosed.style.marginTop = "8px";
		document.querySelector('body').addEventListener("mousemove", eyesMoving);
	} 
};

face.onmouseleave = function(){
	if (face.classList.contains("asleep")) {
		rightEye.style.display = "none";
		eyeRightClosed.style.display = "block";
		rightEye.style.margin = "0 8px";
		rightEye.style.marginTop = "0px";
		eyeLeftClosed.style.margin = "0 8px";
		eyeLeftClosed.style.position = "relative";
		document.querySelector('body').removeEventListener("mousemove", eyesMoving);
	} else if (face.classList.contains("awake")) {
		rightEye.style.margin = "0 8px";
		rightEye.style.marginTop = "0px";
		eyeLeftClosed.style.margin = "0 8px";
		eyeLeftClosed.style.position = "relative";
	}
};

face.onclick = function(){
	if (face.classList.contains("awake")) {
		face.style.opacity = "0.2";
		face.classList.add("asleep");
		face.classList.remove("awake");
		face.style.boxShadow = "none";

		eyeLeftClosed.style.display = "block";
		eyeRightClosed.style.display = "block";
		rightEye.style.display = "none";
		leftEye.style.display = "none";
		sleep.style.display = "block";
		mouthSleep.style.display = "block";
		mouthAwake.style.opacity = "0";

		rightEye.style.display = "block";
		eyeRightClosed.style.display = "none";
		rightEye.style.marginLeft = "8px";
		rightEye.style.marginTop = "0px";
		eyeLeftClosed.style.marginLeft = "-59px";
		eyeLeftClosed.style.position = "relative";
		eyeLeftClosed.style.marginTop = "8px";

		// document.querySelector('body').removeEventListener("mousemove", eyesMoving);
	} else if (face.classList.contains("asleep")) {
		face.style.opacity = "1";
		face.classList.add("awake");
		face.classList.remove("asleep");
		face.style.boxShadow = "0px 0px 10px 5px yellow";

		eyeLeftClosed.style.display = "none";
		eyeRightClosed.style.display = "none";
		rightEye.style.display = "block";
		leftEye.style.display = "block";
		sleep.style.display = "none";
		mouthSleep.style.display = "none";
		mouthAwake.style.opacity = "1";

		rightEye.style.margin = "0 8px";
		rightEye.style.marginTop = "0px";
		eyeLeftClosed.style.position = "relative";

		document.querySelector('body').addEventListener("mousemove", eyesMoving);
	}
};

var seasonsIcon = document.getElementById("seasonsIcon");
var seasons = document.getElementById("buttonSeasons");
var seasonsW = document.getElementById("forest");
var seasonsArray = ["Fotos/forestZomer.svg", "Fotos/forestHerfst.svg", "Fotos/forestWinter.svg", "Fotos/forestLente.svg"];
var seasonChange;
var iSeasons = 0;
var snowW = document.getElementById("snowW");

function changeSeason() {
	seasonChange = setInterval(function(){
		seasonsW.src = seasonsArray[iSeasons++];
		if (iSeasons == seasonsArray.length) {
			iSeasons = 0;
		}
		if (iSeasons == 3 && rainIcon.classList.contains("fa-tint-slash")) {
			rainW.style.display = "none";
			snowW.style.display = "block";
		} else if (rainIcon.classList.contains("fa-tint-slash")) {
			rainW.style.display = "block";
			snowW.style.display = "none";
		}
	},5000)
}

seasons.onclick = function(){
	if (seasonsIcon.classList.contains("tree")) {
		seasons.style.opacity = "1";
		seasonsIcon.classList.add("noseasons");
		seasonsIcon.classList.remove("tree");
		seasons.style.boxShadow = "0px 0px 10px 5px white";
		changeSeason();
		// setInterval(changeSeason, 2000);
	} else if (seasonsIcon.classList.contains("noseasons")) {
		seasons.style.opacity = "0.2";
		seasonsIcon.classList.remove("noseasons");
		seasonsIcon.classList.add("tree");
		seasons.style.boxShadow = "none";
		clearInterval(seasonChange);
	}
};

var rain = document.getElementById("buttonRain");
var rainIcon = document.getElementById("rainIcon");
var rainW = document.getElementById("rainW");
rain.onclick = function(){
	if (rainIcon.classList.contains("fa-tint")) {
		rain.style.opacity = "1";
		rainIcon.classList.add("fa-tint-slash");
		rainIcon.classList.remove("fa-tint");
		rain.style.boxShadow = "0px 0px 10px 5px white";
		if (iSeasons == 3) {
			rainW.style.display = "none";
			snowW.style.display = "block";
		} else {
			rainW.style.display = "block";
			snowW.style.display = "none";
		}
	} else if (rainIcon.classList.contains("fa-tint-slash")) {
		rain.style.opacity = "0.2";
		rainIcon.classList.remove("fa-tint-slash");
		rainIcon.classList.add("fa-tint");
		rainW.style.display = "none";
		rain.style.boxShadow = "none";
		snowW.style.display = "none";
	}
};

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
};

var star = document.getElementById("star");
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');

function rotateSun(){
	if (7 <= currentTime&&currentTime < 9) {
      	sun.style.transform = "rotate(0.15turn)";
    } else if (9 <= currentTime&&currentTime < 11) {
     	sun.style.transform = "rotate(0.2turn)";
    } else if (11 <= currentTime&&currentTime < 13) {
 		sun.style.transform = "rotate(0.25turn)";
	} else if (13 <= currentTime&&currentTime < 15) {
     	sun.style.transform = "rotate(0.3turn)";
    } else if (15 <= currentTime&&currentTime < 17) {
    	sun.style.transform = "rotate(0.35turn)";
	} else if (17 <= currentTime&&currentTime < 19) {
		sun.style.transform = "rotate(0.4turn)";
	} else {
		sun.style.display = "none";
	}
	star.style.display = "none";
}

rotateSun();

function rotateMoon(){
	if (20 <= currentTime&&currentTime < 22) {
      	moon.style.transform = "rotate(0.15turn)";
    } else if (22 <= currentTime&&currentTime < 24) {
     	moon.style.transform = "rotate(0.2turn)";
    } else if (0 <= currentTime&&currentTime < 2) {
    	moon.style.transform = "rotate(0.25turn)";
	} else if (2 <= currentTime&&currentTime < 4) {
     	moon.style.transform = "rotate(0.3turn)";
    } else if (4 <= currentTime&&currentTime < 6) {
    	moon.style.transform = "rotate(0.4turn)";
	} else {
		moon.style.display = "none";
	}
	star.style.display = "block";
}

rotateMoon();