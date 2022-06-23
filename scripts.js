console.log(`this is a test`)



getWeatherData("Riyadh")

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

    switch(weatherData.weather.main) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }


  }