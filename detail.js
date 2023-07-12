
window.addEventListener("DOMContentLoaded", function() {
  var gameText = sessionStorage.getItem("gameText");
  var detailText = sessionStorage.getItem("detailText");
  
  var titleTitle = document.querySelector(".title-title");
  var title = document.querySelector(".title");
  
  if (gameText) {
    titleTitle.innerText = gameText;
  }
  
  if (detailText) {
    title.innerText = detailText;
  }
});

