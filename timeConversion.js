function timeConversion(s) {
  let jacksplit = s.split(':');
  let hours = +jacksplit[0];
  let minutes = +jacksplit[1];
  let secondTime = jacksplit[2];

  if (secondTime.includes('AM')) {
    console.log('time is in AM');
    hours = hours - 12;
    if (hours == 0) {
      hours = '00';
    }
    
    let seconds = secondTime.replace('AM', '');

    console.log(`${hours}:${minutes}:${seconds}`);
  } else {
    console.log('time is in PM');
    let seconds = secondTime.replace('PM', '');

    console.log(`${hours}:${minutes}:${seconds}`);
  }
}
timeConversion('12:01:45AM');
