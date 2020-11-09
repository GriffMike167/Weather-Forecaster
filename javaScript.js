
let searchButton = $(".searchButton").on("click", searchFunction);

let APIKey = "&appid=2b0e45595d4ae6038fa0a7f4e34573f0";
let city = localStorage.getItem("lastResult");
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+APIKey;
let queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q="+city+APIKey;


$.ajax({
  url:queryURL,
  method:"GET"
}).then(function(response){
  console.log(response);
}
)
function searchFunction (){
  localStorage.setItme("inputcontent-" + searchInput.val(), searchInput.val());
  localStorage.setItme("lastresult", searchInput.val());

}

for (var i = 0; i < localStorage.lenght; i++){
  $("output").append("<p class='cityresult'>" + localStorage.getItem(
    localStorage.key(i)) + "</p>")
  
}

let currentDay = moment().format("dddd, MMMM do");

function insertCurrentDay(){
  $(".current-date").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);

