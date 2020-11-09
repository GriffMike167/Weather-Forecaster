let APIKey = "2b0e45595d4ae6038fa0a7f4e34573f0";

// Here we are building the URL we need to query the database

$("city-input").submit(function(event){
    event.preventDefault();

    let cityName = $("city-name").val();
    searchWeather(cityName);
});

function searchWeather(city){
let queryURL = "http://api.openweathermap.org/data/2.5/forcast?q="+city+"id=524901&appid=2b0e45595d4ae6038fa0a7f4e34573f0";
    



// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response)
})};searchWeather();
