const today = new Date();
const time =
	today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const month = today.getMonth();
const day = today.getDay();
const calendarDay = today.getDate();
const year = today.getFullYear();

console.log(calendarDay);

//displays the current time

let currentTime = document.getElementById("current-time");
currentTime.innerHTML = time;

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
	if (month == 8) {
		return monthArr[8];
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
	year;

console.log(time);
console.log(today);
console.log(day);
console.log(month);
console.log(year);
