/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable (seconds) {

function addZeros(value, digits) {
  if (String(value).length === 1) {
    return "0" + String(value);
  } else {
    return value;
  }
}

const timeHours = Math.floor(seconds / 3600);
const timeMinutes = Math.floor((seconds / 3600 - timeHours) * 60);
const timeSeconds = Math.round(((seconds / 3600 - timeHours) * 60 - timeMinutes) * 60);


return [addZeros(timeHours,2),addZeros(timeMinutes,2),addZeros(timeSeconds,2)].join(":");
}
