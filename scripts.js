
// let weatherData = getWeatherData(location_Name);
let locationName = `Dammam`
getWeatherData(`${locationName}`)

async function getWeatherData(location) {
    try {
        const api_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4af83e00a0a923177f45e85a281f0556`
        const response = await fetch(api_URL);
        const weatherData =  await response.json();
        console.log(response)
        console.log(weatherData)
        console.log(`jsonResponse specfiic data`) 
        console.log(weatherData.main.temp)
        console.log(weatherData.name)
        console.log(weatherData.sys.country) 


 
        assignData(weatherData)
        return  
        
    }
    catch {
        console.log(`error within the API`)
    }
  }
 
  function changeFromKelvinToCelsius(temperature) {
    console.log(`kelivn = ${temperature}`)
    let celsius = temperature - 273.15;
    console.log(`kelivn = ${celsius}`)
    return celsius
  } 



  function getImage(weatherData) { 
    //the weatherData.weather[0].main tells if the sky is clear,rainy or cloudy
    switch(weatherData.weather[0].main) {
      case `Clear`:
        console.log(`clear`)
        return imgSrc = "images/Sunny-icon.png"
        break;
      case `Clouds`:
        console.log(`cloudy`)
        return imgSrc = "images/cloudy-icon.png"
          break;
      case `Rains`:
        console.log(`rainy`)
        return imgSrc = "images/rainy-icon.png"
        break;
      default:
        
        console.log(`default`) 
        return imgSrc = "images/githubLogo.png"
    }

  }
    function assignData(weatherData) {

    let averageTemp = document.getElementById("average-temp")
    let maxTemp = document.getElementById("max-temp")
    let minTemp = document.getElementById("min-temp")
    
    averageTemp.textContent = `${changeFromKelvinToCelsius(weatherData.main.temp).toFixed()}C`
    maxTemp.textContent = `${changeFromKelvinToCelsius(weatherData.main.temp_max).toFixed()}C`
    minTemp.textContent = `${changeFromKelvinToCelsius(weatherData.main.temp_min).toFixed()}C`

    let imgAverage = document.getElementById("average-img")
    imgAverage.src = getImage(weatherData)
    let imgMax = document.getElementById("max-img")
    imgMax.src = getImage(weatherData)
    let imgMin = document.getElementById("min-img")
    imgMin.src = getImage(weatherData)

    let locationNameHTML = document.getElementById("location-Name")
    locationNameHTML.textContent = `${locationName}`
    
  }

  function searchBox() {
    
  }