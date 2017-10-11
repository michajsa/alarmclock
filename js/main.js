// var date = new Date();
// console.log(date);
//
// console.log('Today is the' + date.getDate() + 'th');
//
// if(date.getDate() == 0) {
//   console.log('Today is sunday')
// }
// remember these functions also help run the clock and put them on the main page
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

(function startTime() {
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();
  window.rawHours = hour;

  if (hour > 12){
    hour = hour - 12;
  } else if (hour === 0){
    hour = 12;
  };

  minute = checkTime(minute);
  second = checkTime(second);
  window.minutes = minute;
  document.getElementById('time').textContent = hour + ":" + minute + ":" + second;
  setTimeout(startTime, 1000);
})();

var btn = document.getElementById('btn').addEventListener('click', alarm);
var ding = document.getElementById('ding');
var hoursDropdown = document.getElementById('hoursDropdown');
var minutesDropdown = document.getElementById('minutesDropdown');

function alarm() {
  var ampm = document.getElementById('ampm').value;
  var userHours = parseInt(hoursDropdown.value);
  var userMins = parseInt(minutesDropdown.value);
  var clockHours = window.rawHours;
  var clockMinutes = parseInt(windows.minutes);

  var minMessage = (userMins < 10) ? '0' + userMins : userMins;
  document.getElementById('message').textContent = 'Alarm set for ' + hoursDropdown + ':' + minMessage + '' + ampm + '.';

  return (function alarmCheck(){
    var clockHours = window.rawHours;
    var clockMinutes = parseInt(window.minutes);
    var a = 0;

    if (ampm === 'PM') {
      a = userHours + 12;
      if (userHours === 24) {
        a = 12;
      };
    } else {
      if (userHours === 12) {
        userHours = 0;
      };
    };
    console.log(a, clockHours);
    console.log( )
  }
)
}




// remember these options foe looping youre not limited, Make sure you code all the content so we dont have a messy HTML file


for (let i = 1; i <= 12; i++) {
  let hourOption = document.createElement('option');
  hourOption.textContent = i;
  hoursDropdown.appendChild(hourOption);
};

for (let i = 0; i <= 60; i++) {
  let minuteOption = document.createElement('option');
  let minuteText = (i < 10) ? x = '0'+i : i;
  minuteOption.textContent = minuteText;
  minuteOption.value = i;
  minutesDropdown.appendChild(minuteOption);
};
