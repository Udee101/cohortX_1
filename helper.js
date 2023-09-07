const addMinutes = (minutes) => {
  let now = new Date();
  now.setMinutes(now.getMinutes() + minutes);

  return now;
}

const minusMinutes = (minutes) => {
  let now = new Date();
  now.setMinutes(now.getMinutes() - minutes);

  return now;
}

const twoMinutesDifferenceUTCValidator = (upperDeviation, lowerDeviation) => {
  let currentTime = new Date();
  
  if (currentTime > upperDeviation && currentTime < lowerDeviation) {
    return 'Current time is not within +/- 2 minutes of UTC'
  } else {
    return currentTime.toISOString().replace(/\.\d+/, '')
  }
}
module.exports = {addMinutes, minusMinutes, twoMinutesDifferenceUTCValidator}
