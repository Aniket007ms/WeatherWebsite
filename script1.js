const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd8cb7b260msh4d931e682b9d535p1df514jsn04a953b8bb6d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// const getWeather = (city)=>{
//     cityName.innerHTML=city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
// 	.then(response => response.json())
// 	.then(response => 
        
        
//         console.log(response))

//         //cloud_pct.innerHTML = response.cloud_pct
//         temp.innerHTML = response.temp
//         temp2.innerHTML = response.temp
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         humidity2.innerHTML = response.humidity
//         min_temp.innerHTML = response.min_temp
//         max_temp.innerHTML = response.max_temp
//         wind_speed.innerHTML = response.wind_speed
//         wind_speed2.innerHTML = response.wind_speed
//         wind_degrees.innerHTML = response.wind_degrees
//         sunrise.innerHTML = response.sunrise
//         sunset.innerHTML = response.sunset

// 	.catch(err => console.error(err));


// }
// submit.addEventListener("click", (e)=>{
//     getWeather(city.value)
//     e.preventDefault()

// })
// getWeather("Delhi")

city = "Vegas"
cityName.innerHTML=city 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
.then(response => response.json())
.then(response => {
    
    console.log(response)
    
    cloud_pct_a.innerHTML = response.cloud_pct
    temp_a.innerHTML = response.temp
    feels_like_a.innerHTML = response.feels_like
    humidity_a.innerHTML = response.humidity
    min_temp_a.innerHTML = response.min_temp
    max_temp_a.innerHTML = response.max_temp
    wind_speed_a.innerHTML = response.wind_speed
    wind_degrees_a.innerHTML = response.wind_degrees
    sunrise_a.innerHTML = response.sunrise
    sunset_a.innerHTML = response.sunset
    
})
city = "Patna"
cityName.innerHTML=city 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
.then(response => response.json())
.then(response => {
    
    console.log(response)
    
    cloud_pct_b.innerHTML = response.cloud_pct
    temp_b.innerHTML = response.temp
    feels_like_b.innerHTML = response.feels_like
    humidity_b.innerHTML = response.humidity
    min_temp_b.innerHTML = response.min_temp
    max_temp_b.innerHTML = response.max_temp
    wind_speed_b.innerHTML = response.wind_speed
    wind_degrees_b.innerHTML = response.wind_degrees
    sunrise_b.innerHTML = response.sunrise
    sunset_b.innerHTML = response.sunset
    
})
city = "Shanghai"
cityName.innerHTML=city 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
.then(response => response.json())
.then(response => {
    
    console.log(response)
    
    cloud_pct_c.innerHTML = response.cloud_pct
    temp_c.innerHTML = response.temp
    feels_like_c.innerHTML = response.feels_like
    humidity_c.innerHTML = response.humidity
    min_temp_c.innerHTML = response.min_temp
    max_temp_c.innerHTML = response.max_temp
    wind_speed_c.innerHTML = response.wind_speed
    wind_degrees_c.innerHTML = response.wind_degrees
    sunrise_c.innerHTML = response.sunrise
    sunset_c.innerHTML = response.sunset
    
})
city = "Seoul"
cityName.innerHTML=city 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
.then(response => response.json())
.then(response => {
    
    console.log(response)
    
    cloud_pct_d.innerHTML = response.cloud_pct
    temp_d.innerHTML = response.temp
    feels_like_d.innerHTML = response.feels_like
    humidity_d.innerHTML = response.humidity
    min_temp_d.innerHTML = response.min_temp
    max_temp_d.innerHTML = response.max_temp
    wind_speed_d.innerHTML = response.wind_speed
    wind_degrees_d.innerHTML = response.wind_degrees
    sunrise_d.innerHTML = response.sunrise
    sunset_d.innerHTML = response.sunset
    
})
