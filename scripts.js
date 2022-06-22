console.log(`this is a test`)



getWeatherData("Riyadh")
async function getWeatherData(location_Name) {
    try {
        const api_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location_Name}&APPID=4af83e00a0a923177f45e85a281f0556`
        const response = await fetch(api_URL);
        const data =  await response.json();
        console.log(response)
        console.log(data)
        console.log(`jsonResponse specfiic data`) 
        console.log(data.main.temp)
        console.log(data.name)
        
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
 

// let  = `London`; 
// async function getWeatherData(name) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=4af83e00a0a923177f45e85a281f0556`, {mode: 'cors'})
    
//     .then(function(response) {
//         console.log(`number 1`)
//       return response.json();
//     })
//     .then(function(response) {
//         console.log(`number 2`) 
//         img.src = response.data.images.original.url;
//     })
//     .catch(function() {
//         console.log(`ERROR`)
//     })

// }