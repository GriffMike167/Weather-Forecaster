
let searchButton = $(".searchButton").on("click", searchFunction);

let APIKey = "&appid=2b0e45595d4ae6038fa0a7f4e34573f0";
let city = localStorage.getItem("lastResult");
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+APIKey;
let queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q="+city+APIKey;


$.ajax({
  url:queryURL,
  method:"GET"
}).then(function(response){
  console.log(queryURL);
  console.log(response);

  $(".city").html("<h1>" + response.name + "</h1>");
  $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='currentweather icon'>");
  $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
  $(".humidty").text("Humidty: " + response.main.humidity + "%");

  let tempF = (response.main.temp = 273.15) * 1.80 + 32;
  $(".tempF").text("Tempature: " + Math.round(tempF) + " °F");
  
  let lon = response.cord.lon;
  let lat = response.cord.lon;
  let queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat +"&lon=" + lon + APIKey;

  $ajax({
    url: queryURLUv,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);

    $(".uv").text("UV Index: " + response.val());
    


  });




});


function searchFunction (){
  localStorage.setItem("inputcontent-" + searchInput.val(), searchInput.val());
  localStorage.setItem("lastresult", searchInput.val());

}

for (var i = 0; i < localStorage.lenght; i++){
  $("output").append("<p class='cityresult'>" + localStorage.getItem(
    localStorage.key(i)) + "</p>")
  
}

let currentDay = moment().format("dddd, MMMM Do YYYY");

function insertCurrentDay(){
  $(".current-date").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);

