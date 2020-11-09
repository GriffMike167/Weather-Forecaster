
let searchButton = $(".searchButton").on("click", searchFunction);

let APIKey = "2b0e45595d4ae6038fa0a7f4e34573f0";

function searchFunction (){
  localStorage.setItme("inputcontent-" + searchInput.val(), searchInput.val());
  localStorage.setItme("lastresult", searchInput.val());

}

