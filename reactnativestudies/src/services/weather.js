export const getWeatherFromLatAndLong = (latitude, longitude) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=75f0cae446d7abbbc2da3b9d2dba3e9d&units=metric`
  ).then(response => response.json())
