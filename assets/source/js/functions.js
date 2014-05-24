/*jslint browser:true *//*global console: false */
(function () { "use strict";
	var time = new Date(),
		MAX_HOUR = 23,
		MAX_MIN = 59,
		MAX_SEC = 59,
		clock = {};
		clock.hourA = document.getElementById("h_a");
		clock.hourB = document.getElementById("h_b");
		clock.hourC = document.getElementById("h_c");
		clock.hourD = document.getElementById("h_d");
		clock.minuteA = document.getElementById("m_a");
		clock.minuteB = document.getElementById("m_b");
		clock.minuteC = document.getElementById("m_c");
		clock.minuteD = document.getElementById("m_d");
		clock.secondA = document.getElementById("s_a");
		clock.secondB = document.getElementById("s_b");
		clock.secondC = document.getElementById("s_c");
		clock.secondD = document.getElementById("s_d");

		clock.secondN = document.getElementById("s_n");
		clock.secondNst = document.getElementById("s_nst");
		clock.minuteN = document.getElementById("m_n");
		clock.hourN = document.getElementById("h_n");
		

	function checkValueInRange(value, upperlimit) {
		if(value < 0) {
			return upperlimit - (value + 1);
		}
		else if (value < 10) {
			return "0" + value;
		}
		else if (value > upperlimit) {
			return "00";
		}
		else {
			return value;
		}
	}
	function setOldHour(newtime) {
		clock.hourC.textContent = checkValueInRange(newtime - 1, MAX_HOUR);
		clock.hourN.textContent = checkValueInRange(newtime + 1, MAX_HOUR);
	}
	function setOldMinute(newtime) {
		clock.minuteC.textContent = checkValueInRange(newtime - 1, MAX_MIN);
		clock.minuteN.textContent = checkValueInRange(newtime + 1, MAX_MIN);
	}
	function setOldSecond(newtime) {
		clock.secondC.textContent = checkValueInRange(newtime - 2, MAX_SEC);
		clock.secondD.textContent = checkValueInRange(newtime - 1, MAX_SEC);
	}
	
	function updateTime () {
		time = new Date();

		clock.hourD.textContent = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
		setOldHour(parseInt(clock.hourD.textContent, 10));

		clock.minuteD.textContent = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
		setOldMinute(parseInt(clock.minuteD.textContent, 10));

		clock.secondN.textContent = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
		setOldSecond(parseInt(clock.secondN.textContent, 10));
		clock.secondNst.textContent = (parseInt(clock.secondD.textContent, 10)+2)< 10 ? "0" + (parseInt(clock.secondD.textContent, 10)+2) : (parseInt(clock.secondD.textContent, 10)+2);
	}
	updateTime();
	function moveTime() {
		clock.secondC.classList.add("animate");
		clock.secondD.classList.add("animate");
		clock.secondN.classList.add("animate");
		clock.secondNst.classList.add("animate");

		clock.secondD.style.color = "rgba(0,0,0,0.2)";
		clock.secondN.style.color = "#333";
	}
	function startTime() {
		moveTime();
	}
	setInterval(startTime, 1000);

	clock.secondN.addEventListener('webkitAnimationEnd', function( event ) { 
		updateTime();

    	clock.secondC.classList.remove("animate");
        clock.secondD.classList.remove("animate");
        clock.secondN.classList.remove("animate");
        clock.secondNst.classList.remove("animate");
        clock.secondD.style.color="";
		clock.secondN.style.color="";
    }, false );

}());
