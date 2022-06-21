console.log(`this is a test`)



doStuff()
async function doStuff() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=4af83e00a0a923177f45e85a281f0556`);
    const jsonResponse =  await response.json();
    console.log(jsonResponse)
    console.log("First Timeout")
  
    const msg2 = await setTimeoutPromise(200)
    console.log(msg2)
    console.log("Second Timeout")
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