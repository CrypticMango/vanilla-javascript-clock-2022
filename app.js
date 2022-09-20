const today = new Date();
const time =
	today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const month = today.getMonth();
const day = today.getDay();
const calendarDay = today.getDate();
const year = today.getFullYear();

console.log(calendarDay);

//displays the current time 24 hour clock

const twentyClock = document.getElementById("twenty-four-clock");
twentyClock.addEventListener("click", pressTwentyFour);

function pressTwentyFour() {
	let currentTwoFourTime = document.getElementById("current-time");
	currentTwoFourTime.innerHTML = time;
}

//displays current time 12 hour clock

const twelveClock = document.getElementById("twelve-clock");
twelveClock.addEventListener("click", pressTwelve);

function pressTwelve() {
	let twelveTime = document.getElementById("current-time");
	let currentTwelveTime = today.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
	twelveTime.innerHTML = currentTwelveTime;
}

//displays the day of the week

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function displayDay() {
	if (day == 0) {
		return daysOfWeek[0];
	} else if (day == 1) {
		return daysOfWeek[1];
	} else if (day == 2) {
		return daysOfWeek[2];
	} else if (day == 3) {
		return daysOfWeek[3];
	} else if (day == 4) {
		return daysOfWeek[4];
	} else if (day == 5) {
		return daysOfWeek[5];
	} else {
		return daysOfWeek[6];
	}
}

//displays the month of the year

const monthArr = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function displayMonth() {
	if (month == 0) {
		return monthArr[0];
	} else if (month == 1) {
		return monthArr[1];
	} else if (month == 2) {
		return monthArr[2];
	} else if (month == 3) {
		return monthArr[3];
	} else if (month == 4) {
		return monthArr[4];
	} else if (month == 5) {
		return monthArr[5];
	} else if (month == 6) {
		return monthArr[6];
	} else if (month == 7) {
		return monthArr[7];
	} else if (month == 8) {
		return monthArr[8];
	} else if (month == 9) {
		return monthArr[9];
	} else if (month == 10) {
		return monthArr[10];
	} else {
		return monthArr[11];
	}
}

let currentDate = document.getElementById("current-date");
currentDate.innerHTML =
	displayDay() +
	"," +
	" " +
	displayMonth() +
	" " +
	calendarDay +
	" " +
	"/" +
	" " +
	year;

console.log(
	today.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	})
);

//theme button variables
themeOne = document.getElementById("theme-one");
themeTwo = document.getElementById("theme-two");
themeThree = document.getElementById("theme-three");
themeFour = document.getElementById("theme-four");

themeOne.addEventListener("click", themeOneButton);
themeTwo.addEventListener("click", themeTwoButton);
themeThree.addEventListener("click", themeThreeButton);
themeFour.addEventListener("click", themeFourButton);

//functions for theme button color switching
function themeOneButton() {
	//change background
	document.body.style.backgroundColor = "rgb(233, 69, 96)";

	//change clock 12 button styling
	document.getElementById("twelve-clock").style.backgroundColor = "rgb(233, 69, 96)";
	document.getElementById("twelve-clock").style.border = "2px solid rgb(22, 33, 62)";
	document.getElementById("twelve-clock").style.color = "rgb(22, 33, 62)";

	//change clock 24 button styling
	document.getElementById("twenty-four-clock").style.border = "2px solid rgb(22, 33, 62)";
	document.getElementById("twenty-four-clock").style.backgroundColor = "rgb(233, 69, 96)";
	document.getElementById("twenty-four-clock").style.color = "rgb(22, 33, 62)"

	//text color change
	document.getElementById("title").style.color = "rgb(22, 33, 62)";
	document.getElementById("theme-title").style.color = "rgb(22, 33, 62)";
	document.getElementById("current-date").style.color = "rgb(22, 33, 62)";
	document.getElementById("current-time").style.color = "rgb(233, 69, 96)";

	//large clock border
	document.getElementById("big-clock-border").style.borderColor = "rgb(22, 33, 62)";
	document.getElementById("big-clock-border").style.boxShadow = "0px 0px 0px 5px rgb(15, 52, 96) inset";

	//theme buttons border change
	document.getElementsByClassName('color-buttons')[0].style.border = "2px solid rgb(22, 33, 62)";
	document.getElementsByClassName('color-buttons')[1].style.border = "2px solid rgb(22, 33, 62)";
	document.getElementsByClassName('color-buttons')[2].style.border = "2px solid rgb(22, 33, 62)";
	document.getElementsByClassName('color-buttons')[3].style.border = "2px solid rgb(22, 33, 62)";

	//theme buttons background change
	document.getElementsByClassName('color-buttons')[0].style.backgroundColor = "rgb(233, 69, 96)";
	document.getElementsByClassName('color-buttons')[1].style.backgroundColor = "rgb(233, 69, 96)";
	document.getElementsByClassName('color-buttons')[2].style.backgroundColor = "rgb(233, 69, 96)";
	document.getElementsByClassName('color-buttons')[3].style.backgroundColor = "rgb(233, 69, 96)";

	//theme buttons text color
	document.getElementsByClassName('color-buttons')[0].style.color = "rgb(22, 33, 62)";
	document.getElementsByClassName('color-buttons')[1].style.color = "rgb(22, 33, 62)";
	document.getElementsByClassName('color-buttons')[2].style.color = "rgb(22, 33, 62)";
	document.getElementsByClassName('color-buttons')[3].style.color = "rgb(22, 33, 62)";

	//digi clock styling
	document.getElementsByClassName('digi-clock')[0].style.backgroundColor = "rgb(22, 33, 62)";
	document.getElementsByClassName('digi-clock')[0].style.border = "4px solid rgb(15, 52, 96)";
}


function themeTwoButton() {
	//change background
	document.body.style.backgroundColor = "#000000";

	//change clock 12 button styling
	document.getElementById("twelve-clock").style.backgroundColor = "rgb(255, 182, 185)";
	document.getElementById("twelve-clock").style.border = "2px solid rgb(190, 235, 233)";
	document.getElementById("twelve-clock").style.color = "#000";

	//change clock 24 button styling
	document.getElementById("twenty-four-clock").style.border = "2px solid rgb(190, 235, 233)";
	document.getElementById("twenty-four-clock").style.backgroundColor = "rgb(255, 182, 185)";
	document.getElementById("twenty-four-clock").style.color = "#000"
	
	//text color change
	document.getElementById("title").style.color = "rgb(190, 235, 233)";
	document.getElementById("theme-title").style.color = "rgb(190, 235, 233)";
	document.getElementById("current-date").style.color = "rgb(190, 235, 233)";
	document.getElementById("current-time").style.color = "#000000";
	
	//large clock border
	document.getElementById("big-clock-border").style.borderColor = "rgb(255, 182, 185)";
	document.getElementById("big-clock-border").style.boxShadow = "0px 0px 0px 5px rgb(246, 238, 199) inset";

	//theme buttons border change
	document.getElementsByClassName('color-buttons')[0].style.border = "2px solid rgb(255, 182, 185)";
	document.getElementsByClassName('color-buttons')[1].style.border = "2px solid rgb(255, 182, 185)";
	document.getElementsByClassName('color-buttons')[2].style.border = "2px solid rgb(255, 182, 185)";
	document.getElementsByClassName('color-buttons')[3].style.border = "2px solid rgb(255, 182, 185)";

	//theme buttons background change
	document.getElementsByClassName('color-buttons')[0].style.backgroundColor = "rgb(246, 238, 199)";
	document.getElementsByClassName('color-buttons')[1].style.backgroundColor = "rgb(246, 238, 199)";
	document.getElementsByClassName('color-buttons')[2].style.backgroundColor = "rgb(246, 238, 199)";
	document.getElementsByClassName('color-buttons')[3].style.backgroundColor = "rgb(246, 238, 199)";

		//theme buttons text color
		document.getElementsByClassName('color-buttons')[0].style.color = "#000";
		document.getElementsByClassName('color-buttons')[1].style.color = "#000";
		document.getElementsByClassName('color-buttons')[2].style.color = "#000";
		document.getElementsByClassName('color-buttons')[3].style.color = "#000";

	//digi clock styling
	document.getElementsByClassName('digi-clock')[0].style.backgroundColor = "rgb(246, 238, 199)";
	document.getElementsByClassName('digi-clock')[0].style.border = "4px solid rgb(255, 182, 185)";
}

function themeThreeButton() {
	//change background
	document.body.style.backgroundColor = "rgb(134, 52, 10)";

	//change clock 12 button styling
	document.getElementById("twelve-clock").style.backgroundColor = "rgb(195, 104, 57)";
	document.getElementById("twelve-clock").style.border = "2px solid rgb(126, 181, 166)";
	document.getElementById("twelve-clock").style.color = "rgb(232, 208, 179)";

	//change clock 24 button styling
	document.getElementById("twenty-four-clock").style.border = "2px solid rgb(126, 181, 166)";
	document.getElementById("twenty-four-clock").style.backgroundColor = "rgb(195, 104, 57)";
	document.getElementById("twenty-four-clock").style.color = "rgb(232, 208, 179)"
	
	//text color change
	document.getElementById("title").style.color = "rgb(232, 208, 179)";
	document.getElementById("theme-title").style.color = "rgb(232, 208, 179)";
	document.getElementById("current-date").style.color = "rgb(232, 208, 179)";
	document.getElementById("current-time").style.color = "rgb(232, 208, 179)";
	
	//large clock border
	document.getElementById("big-clock-border").style.borderColor = "rgb(126, 181, 166)";
	document.getElementById("big-clock-border").style.boxShadow = "0px 0px 0px 5px rgb(232, 208, 179) inset";

	//theme buttons border change
	document.getElementsByClassName('color-buttons')[0].style.border = "2px solid rgb(126, 181, 166)";
	document.getElementsByClassName('color-buttons')[1].style.border = "2px solid rgb(126, 181, 166)";
	document.getElementsByClassName('color-buttons')[2].style.border = "2px solid rgb(126, 181, 166)";
	document.getElementsByClassName('color-buttons')[3].style.border = "2px solid rgb(126, 181, 166)";

	//theme buttons background change
	document.getElementsByClassName('color-buttons')[0].style.backgroundColor = "rgb(195, 104, 57)";
	document.getElementsByClassName('color-buttons')[1].style.backgroundColor = "rgb(195, 104, 57)";
	document.getElementsByClassName('color-buttons')[2].style.backgroundColor = "rgb(195, 104, 57)";
	document.getElementsByClassName('color-buttons')[3].style.backgroundColor = "rgb(195, 104, 57)";

	//theme buttons text color
	document.getElementsByClassName('color-buttons')[0].style.color = "rgb(232, 208, 179)";
	document.getElementsByClassName('color-buttons')[1].style.color = "rgb(232, 208, 179)";
	document.getElementsByClassName('color-buttons')[2].style.color = "rgb(232, 208, 179)";
	document.getElementsByClassName('color-buttons')[3].style.color = "rgb(232, 208, 179)";

	//digi clock styling
	document.getElementsByClassName('digi-clock')[0].style.backgroundColor = "rgb(195, 104, 57)";
	document.getElementsByClassName('digi-clock')[0].style.border = "4px solid rgb(126, 181, 166)";
}

function themeFourButton() {
	//change background
	document.body.style.backgroundColor = "rgb(77, 150, 255)";

	//change clock 12 button styling
	document.getElementById("twelve-clock").style.backgroundColor = "rgb(255, 217, 61)";
	document.getElementById("twelve-clock").style.border = "2px solid rgb(255, 107, 107)";
	document.getElementById("twelve-clock").style.color = "rgb(77, 150, 255)";

	//change clock 24 button styling
	document.getElementById("twenty-four-clock").style.border = "2px solid rgb(255, 107, 107)";
	document.getElementById("twenty-four-clock").style.backgroundColor = "rgb(255, 217, 61)";
	document.getElementById("twenty-four-clock").style.color = "rgb(77, 150, 255)"
	
	//text color change
	document.getElementById("title").style.color = "rgb(107, 203, 119)";
	document.getElementById("theme-title").style.color = "rgb(107, 203, 119)";
	document.getElementById("current-date").style.color = "rgb(255, 107, 107)";
	document.getElementById("current-time").style.color = "rgb(77, 150, 255)";
	
	//large clock border
	document.getElementById("big-clock-border").style.borderColor = "rgb(255, 107, 107)";
	document.getElementById("big-clock-border").style.boxShadow = "0px 0px 0px 5px rgb(255, 217, 61) inset";

	//theme buttons border change
	document.getElementsByClassName('color-buttons')[0].style.border = "2px solid rgb(255, 107, 107)";
	document.getElementsByClassName('color-buttons')[1].style.border = "2px solid rgb(255, 107, 107)";
	document.getElementsByClassName('color-buttons')[2].style.border = "2px solid rgb(255, 107, 107)";
	document.getElementsByClassName('color-buttons')[3].style.border = "2px solid rgb(255, 107, 107)";

	//theme buttons background change
	document.getElementsByClassName('color-buttons')[0].style.backgroundColor = "rgb(255, 217, 61)";
	document.getElementsByClassName('color-buttons')[1].style.backgroundColor = "rgb(255, 217, 61)";
	document.getElementsByClassName('color-buttons')[2].style.backgroundColor = "rgb(255, 217, 61)";
	document.getElementsByClassName('color-buttons')[3].style.backgroundColor = "rgb(255, 217, 61)";

	//theme buttons text color
	document.getElementsByClassName('color-buttons')[0].style.color = "rgb(77, 150, 255)";
	document.getElementsByClassName('color-buttons')[1].style.color = "rgb(77, 150, 255)";
	document.getElementsByClassName('color-buttons')[2].style.color = "rgb(77, 150, 255)";
	document.getElementsByClassName('color-buttons')[3].style.color = "rgb(77, 150, 255)";

	//digi clock styling
	document.getElementsByClassName('digi-clock')[0].style.backgroundColor = "rgb(255, 217, 61)";
	document.getElementsByClassName('digi-clock')[0].style.border = "4px solid rgb(255, 107, 107)";
}

console.log(time);
console.log(today);
console.log(day);
console.log(month);
console.log(year);

//pressTwelve();
pressTwentyFour();