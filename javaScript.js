


let APIKey = "&appid=a1e01b951a95042a50e99d7d3222a66d";
let city = localStorage.getItem("lastresult");




    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
    let queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;



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


let tempF = (response.main.temp - 273.15) * 1.80 + 32;
$(".tempF").text("Temperature: " + Math.round(tempF) + " °F");


let lon = response.coord.lon;
let lat = response.coord.lon;
let queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + APIKey;




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

let dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
console.log(moment(response.list[0].dt_txt).format("ddd, MMM D"));


$(".day-one-date").html("<h6>" + dayOne + "</h6>");
$(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");


let tempOne = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-one-temp").text("Temp: " + Math.round(tempOne) + " °F");

let dayTwo = moment(response.list[0].dt_txt).format("ddd, MMM D");
$(".day-two-date").html("<h6>" + dayTwo + "</h6>");
$(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-two-humidity").text("Humidity: " + response.list[0].main.humidity + "%");


let tempTwo = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-two-temp").text("Temp: " + Math.round(tempTwo) + " °F");

let dayThree = moment(response.list[0].dt_txt).format("ddd, MMM D");
$(".day-three-date").html("<h6>" + dayThree + "</h6>");
$(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-three-humidity").text("Humidity: " + response.list[0].main.humidity + "%");


let tempThree = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-three-temp").text("Temp: " + Math.round(tempThree) + " °F");

let dayFour = moment(response.list[0].dt_txt).format("ddd, MMM D");
$(".day-four-date").html("<h6>" + dayFour + "</h6>");
$(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-four-humidity").text("Humidity: " + response.list[0].main.humidity + "%");


let tempFour = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-four-temp").text("Temp: " + Math.round(tempFour) + " °F");

let dayfive = moment(response.list[0].dt_txt).format("ddd, MMM D");
$(".day-five-date").html("<h6>" + dayfive + "</h6>");
$(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-five-humidity").text("Humidity: " + response.list[0].main.humidity + "%");


let tempfive = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-five-temp").text("Temp: " + Math.round(tempfive) + " °F");

});




let searchInput = document.querySelector(".input");
let searchOutput = document.querySelector(".output");
let searchButton = document.querySelector(".search");

searchButton.addEventListener("click", searchFunction);


function searchFunction() {
    localStorage.setItem("inputcontent-" + searchInput.value, searchInput.value);
    localStorage.setItem("lastresult", searchInput.value);

}

for (let i = 0; i < localStorage.length; i++){
    $(".output").append("<p class='cityresult'>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}



let currentDay = moment().format("dddd, MMMM Do");

function insertCurrentDay() {
    $(".current-date").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);

