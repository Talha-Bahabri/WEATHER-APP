console.log(`this is a test`)



getWeatherData()
async function getWeatherData() {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=4af83e00a0a923177f45e85a281f0556`);
        const jsonResponse =  await response.json();
        console.log(jsonResponse)
        console.log(`jsonResponse specfiic data`)
        const speceficData = jsonResponse.data.main.feels_like;
        console.log(speceficData)
        
    }
    catch {
        console.log(`error within the API`)
    }
  }

  function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) return reject("Delay must be greater than 0")
  
      setTimeout(() => {
        resolve(`You waited ${delay} milliseconds`)
      }, delay)
    })
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