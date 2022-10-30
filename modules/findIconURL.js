function findIconURL(weather) {
   const weathers = ["clear sky", "few clouds", "scattered clouds", "broken clouds", "shower rain", "rain", "thunderstorm", "snow", "mist"]
   const codes = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d" ]
    let iconURL;
    weathers.find((e,i) => {
        e===weather.toLowerCase() ? iconURL = ` http://openweathermap.org/img/wn/${codes[i]}@2x.png` : false;
    })

    return iconURL;
}

  
  module.exports = { findIconURL };