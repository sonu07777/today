const date = new Date();
let weak = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.getElementById("date").innerHTML = date.getDate();
document.getElementById("day").innerHTML = weak[date.getDay()];
document.getElementById("month").innerHTML = months[date.getMonth()];
document.getElementById("year").innerHTML = date.getFullYear();
console.log(weak(1));
