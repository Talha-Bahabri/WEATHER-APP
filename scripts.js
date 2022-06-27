 
let locationName = `DAMMAM`
getWeatherData(locationName)
searchBox()

async function getWeatherData(location) {
    try {
        const api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4af83e00a0a923177f45e85a281f0556`
        const response = await fetch(api_URL);
        const weatherData =  await response.json();
        
        assignData(weatherData) 
        
    }
    catch {
        console.log(`error within the API`)
        let locationNameHTML = document.getElementById("location-Name")
        locationNameHTML.textContent = `error on fetching the data, need a vaild location`
    }
  }
 
  function changeFromKelvinToCelsius(temperature) { 
    let celsius = temperature - 273.15; 
    return celsius
  } 

  function getImage(weatherData) { 
    //the weatherData.weather[0].main tells if the sky is clear,rainy or cloudy
    switch(weatherData.weather[0].main) {
      case `Clear`: 
        return imgSrc = "images/Sunny-icon.png"
        break;
      case `Clouds`: 
        return imgSrc = "images/cloudy-icon.png"
          break;
      case `Rains`: 
        return imgSrc = "images/rainy-icon.png"
        break;
      default:  
        return imgSrc = "images/Sunny-icon.png"
    }

  }
    function assignData(weatherData) {

    let averageTemp = document.getElementById("average-temp")
    let feelsLike = document.getElementById("feels-like")
    let humidity = document.getElementById("humidity")
    // let maxTemp = document.getElementById("max-temp")
    // let minTemp = document.getElementById("min-temp")
    
    averageTemp.textContent = `TEMP: ${changeFromKelvinToCelsius(weatherData.main.temp).toFixed()}° c`
    feelsLike.textContent = `Feels like: ${changeFromKelvinToCelsius(weatherData.main.feels_like).toFixed()}° c`
    humidity.textContent = `Humidity: ${weatherData.main.humidity.toFixed()}%`
    // maxTemp.textContent = `Max:${changeFromKelvinToCelsius(weatherData.main.temp_max).toFixed()}C`
    // minTemp.textContent = `Min:${changeFromKelvinToCelsius(weatherData.main.temp_min).toFixed()}C`

    let imgAverage = document.getElementById("average-img")
    imgAverage.src = getImage(weatherData)
    // let imgMax = document.getElementById("max-img")
    // imgMax.src = getImage(weatherData)
    // let imgMin = document.getElementById("min-img")
    // imgMin.src = getImage(weatherData)

    let locationNameHTML = document.getElementById("location-Name")
    locationNameHTML.textContent = `${locationName}`
    
  }

  function searchBox() {
    
    let searchBox = document.getElementById("search-Box")
    let searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click" , function (e) {
        locationName = `${searchBox.value.toUpperCase()}` 
        getWeatherData(`${locationName}`)

  }) 

  }