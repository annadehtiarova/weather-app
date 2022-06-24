let weather = {
    apiKey: "db3480232dab9633f3506265be18ce7d",
    fetchWeather: function(city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
    const {name} = data;
    const {icon, main} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    // console.log(name, icon, main, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = main;
    document.querySelector(".temp").innerText = Math.floor(temp) + ' °C';
    document.querySelector(".humidity").innerText = humidity + ' %';
    document.querySelector(".wind").innerText = speed + ' km/h';
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ' city' +  "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      weather.search()
    }
})

weather.fetchWeather('Paris');

