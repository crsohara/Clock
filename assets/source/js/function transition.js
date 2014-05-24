/*jslint browser:true *//*global console: false */
(function () { "use strict";
	var time = new Date(),
		MAX_HOUR = 23,
		MAX_MIN = 59,
		MAX_SEC = 59,
		height,
		gametime = {};
		gametime.hourA = document.getElementById("h_a");
		gametime.hourB = document.getElementById("h_b");
		gametime.hourC = document.getElementById("h_c");
		gametime.hourD = document.getElementById("h_d");
		gametime.minuteA = document.getElementById("m_a");
		gametime.minuteB = document.getElementById("m_b");
		gametime.minuteC = document.getElementById("m_c");
		gametime.minuteD = document.getElementById("m_d");
		gametime.secondA = document.getElementById("s_a");
		gametime.secondB = document.getElementById("s_b");
		gametime.secondC = document.getElementById("s_c");
		gametime.secondD = document.getElementById("s_d");

		gametime.secondN = document.getElementById("s_n");
		gametime.minuteN = document.getElementById("m_n");
		gametime.hourN = document.getElementById("h_n");
		

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
		gametime.hourC.textContent = checkValueInRange(newtime - 1, MAX_HOUR);
		gametime.hourN.textContent = checkValueInRange(newtime + 1, MAX_HOUR);
		//gametime.hourB.textContent = checkValueInRange(newtime - 2, MAX_HOUR);
		//gametime.hourA.textContent = checkValueInRange(newtime - 3, MAX_HOUR);
	}
	function setOldMinute(newtime) {
		gametime.minuteC.textContent = checkValueInRange(newtime - 1, MAX_MIN);
		gametime.minuteN.textContent = checkValueInRange(newtime + 1, MAX_MIN);
		//gametime.minuteB.textContent = checkValueInRange(newtime - 2, MAX_MIN);
		//gametime.minuteA.textContent = checkValueInRange(newtime - 3, MAX_MIN);
	}
	function setOldSecond(newtime) {
		gametime.secondC.textContent = checkValueInRange(newtime - 1, MAX_SEC);
		gametime.secondN.textContent = checkValueInRange(newtime + 1, MAX_SEC);
		//gametime.secondB.textContent = checkValueInRange(newtime - 2, MAX_SEC);
		//gametime.secondA.textContent = checkValueInRange(newtime - 3, MAX_SEC);
	}
	
	function updateTime () {
		gametime.hourD.style.top = "0";
		gametime.minuteD.style.top = "0";
		gametime.secondD.style.top = "0";
		time = new Date();

		gametime.hourD.textContent = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
		setOldHour(parseInt(gametime.hourD.textContent, 10));

		gametime.minuteD.textContent = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
		setOldMinute(parseInt(gametime.minuteD.textContent, 10));

		gametime.secondD.textContent = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
		setOldSecond(parseInt(gametime.secondD.textContent, 10));
	}
	updateTime();
	function moveTime() {
		height = -gametime.hourD.clientHeight;
		// gametime.hourD.style.top = height;
		// gametime.minuteD.style.top = height;
		gametime.secondC.style.top = height;
		gametime.secondD.style.top = height;
		gametime.secondN.style.top = height;
	}
	function startTime() {
		updateTime();
		moveTime();
	}
	setInterval(startTime, 1000);

	gametime.secondD.addEventListener( 
     'webkitTransitionEnd', 
     function( event ) { 
         //gametime.hourD.style.top = "auto";
         //gametime.minuteD.style.top = "auto";
         gametime.secondC.style.top = "auto"
         gametime.secondD.style.top = "auto";
         gametime.secondN.style.top = "auto"
     }, false );


}());
