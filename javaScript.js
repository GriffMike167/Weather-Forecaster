
let searchButton = $(".searchButton").on("click", searchFunction);

let APIKey = "2b0e45595d4ae6038fa0a7f4e34573f0";

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

