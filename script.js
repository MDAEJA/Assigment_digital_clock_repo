const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const day = document.querySelector(".day");

function current_Time(){
const today = new Date();
// convert time to local time
const convert_to_local_time = today.toLocaleString();
let arrString = convert_to_local_time.split(",");
console.log(arrString);
let hrs;
let min;
let sec;
let days;
date_formate_arr = arrString[1].split(":");
hrs = date_formate_arr[0];
// console.log(date_formate_arr);
if(hrs < 10) hrs = "0" + date_formate_arr[0].slice(1,2);
else hrs = date_formate_arr[0];
if(min < 10) min = "0" + date_formate_arr[1].slice(1,2);
else min = date_formate_arr[1];
if(sec < 10) sec = "0" + date_formate_arr[2].slice(1,2);
else sec = date_formate_arr[2].slice(0,2);

days = date_formate_arr[2].slice(-2); 
hours.innerHTML = hrs;
minutes.innerHTML = min;
seconds.innerHTML = sec;
day.innerHTML = days;

// console.log(hrs);
// console.log(min);
// console.log(sec);
// console.log(day);
};
// current_Time();
setInterval(current_Time,1000);

