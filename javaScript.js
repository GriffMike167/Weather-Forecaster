


var APIKey = "&appid=a1e01b951a95042a50e99d7d3222a66d";
var city = localStorage.getItem("lastresult");




    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
    var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;



$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(queryURL);
    console.log(response);


    $(".city").html("<h1>" + response.name + "</h1>");
    $(".icon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");


var tempF = (response.main.temp - 273.15) * 1.80 + 32;
$(".tempF").text("Temperature: " + Math.round(tempF) + " °F");


var lon = response.coord.lon;
var lat = response.coord.lon;
var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + APIKey;




$.ajax({
    url: queryURLUv,
    method: "GET"
})
.then(function(response) {
    console.log(queryURL);
    console.log(response);

    
    $(".uv").text("UV Index: " + response.value);
    $(".uv").css("background-color", "yellow");


});


});

$.ajax({
    url: queryURLFive,
    method: "GET"
})
.then(function(response) {
    console.log(queryURLFive);
    console.log(response);

var dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
console.log(moment(response.list[0].dt_txt).format("ddd, MMM D"));


$(".day-one-date").html("<h6>" + dayOne + "</h6>");
$(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");


var tempOne = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-one-temp").text("Temp: " + Math.round(tempOne) + " °F");




});




var searchInput = document.querySelector(".input");
var searchOutput = document.querySelector(".output");
var searchButton = document.querySelector(".search");

searchButton.addEventListener("click", searchFunction);


function searchFunction() {
    localStorage.setItem("inputcontent-" + searchInput.value, searchInput.value);
    localStorage.setItem("lastresult", searchInput.value);

}

for (var i = 0; i < localStorage.length; i++){
    $(".output").append("<p class='cityresult'>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}



var currentDay = moment().format("dddd, MMMM Do");

function insertCurrentDay() {
    $(".current-date").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);
