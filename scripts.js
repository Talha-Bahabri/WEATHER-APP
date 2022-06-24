console.log(`this is a test`)


getWeatherData("dammam")

async function getWeatherData(location_Name) {
    try {
        const api_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location_Name}&APPID=4af83e00a0a923177f45e85a281f0556`
        const response = await fetch(api_URL);
        const weatherData =  await response.json();
        console.log(response)
        console.log(weatherData)
        console.log(`jsonResponse specfiic data`) 
        console.log(weatherData.main.temp)
        console.log(weatherData.name)
        console.log(weatherData.sys.country) 

        let img1 = document.getElementById("today-img")
        img1.src = getImage(weatherData)

        return 
        
    }
    catch {
        console.log(`error within the API`)
    }
  }

  console.log(changeFromKelvinToCelsius(318.23))
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