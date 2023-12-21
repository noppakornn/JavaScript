// digitalClock(5025) = "01:23:45"
// digitalClock(61201) = "17:00:01"
// No AM/PM 24h format.
// digitalClock(87000) = "00:10:00"
// It's 00:10 next day.

/*function timeConversion(s) {
    const time = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
        (time[0] == 12 ? '12' : Number(time[0]) +12) : 
        (time[0] == 12 ? '00' : time[0]);
    return time.join(':');
}*/

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(5025));
console.log(time_convert(450));
console.log(time_convert(5000));