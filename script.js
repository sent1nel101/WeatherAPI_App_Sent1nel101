let weather = {
  "apikey": "0097e03a6236c7d401ba5bda6437e681",
  fetchWeather: function (city){
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apikey).then((response) => response.json()).then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city")
.innerText =   "Weather in " + name;
    document.querySelector(".temp").innerText = Math.floor(temp) + "°F";
    document.querySelector(".description").innerText = description;
    document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "wind speed: " + speed + " mph";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ",cityscape')"
  },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value)
    }
}
document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
})

document.querySelector(".searchbar").addEventListener('keypress',function(event){
    if(event.keyCode == 13) {
        weather.search();
    }

})

weather.fetchWeather("JACKSONVILLE");