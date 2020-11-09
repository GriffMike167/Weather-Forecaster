var APIKey = "44fbacaa2044fcf83cb1825fa4aa0536";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/forcast?q={cityname}&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response)
})