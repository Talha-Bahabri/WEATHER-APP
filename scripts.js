console.log(`this is a test`)

let  = `London`; 
async function getWeatherData(name) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=4af83e00a0a923177f45e85a281f0556`, {mode: 'cors'})
    
    .then(function(response) {
        console.log(`number 1`)
      return response.json();
    })
    .then(function(response) {
        console.log(`number 2`) 
        img.src = response.data.images.original.url;
    })
    .catch(function() {
        console.log(`ERROR`)
    })

}