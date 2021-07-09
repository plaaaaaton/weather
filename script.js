 window.addEventListener('load', () => {
     let long;
     let lat;
     let tempDescription = document.querySelector('.temperature-description')
     let tempDegree = document.querySelector(".degree")
     let locationTimezone = document.querySelector('.location-timezone')

     if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude
            lat = position.coords.latitude

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a485728290f11277058d0b1fda6c2b9f`
             
            fetch(api).then(response => {
                return response.json()
            }).then(data => {
                const {temp} = data.main
                const {main} = data.weather[0]
                const zone = data.name
                console.log(zone)
                tempDegree.textContent = temp
                tempDescription.textContent = main
                locationTimezone.textContent = zone
            })
        })


     } else{
        h1.textContent = "err"
     }
 })