const hourEle = document.querySelector(".hours");
const minuteEle = document.querySelector(".minutes");
const secondEle = document.querySelector(".seconds");

function updateClock(){
 const currentTime = new Date();
//  setTimeout(updateClock,1000);
 const hour = currentTime.getHours();
 const minute = currentTime.getMinutes();
 const second = currentTime.getSeconds();

 const hourDeg = (hour/12)*360;
 hourEle.style.tranform = `rotate(${hourDeg}deg)`;
 const minuteDeg = (minute/60)*360;
 minuteEle.style.transform=`rotate(${minuteDeg}deg)`
 const secondDeg = (second/60)*360;
 secondEle.style.transform=`rotate(${secondDeg}deg)`

}
// updateClock();
setInterval(updateClock,1000)