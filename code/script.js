function showPunishmentPage() {
  var punishmentPage = document.getElementById("punishment");
  punishmentPage.classList.remove("hidden");
  var indexPage = document.getElementById("index");
  indexPage.style.opacity = "0.5";
  
  var punishmentText = "";
  var text = document.querySelector(".punishment-text");
  var punishmentFile = "/text/dare.txt";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", punishmentFile, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var punishments = xhr.responseText.split("\n").filter(function(punishment) {
        return punishment.trim().length > 0; // 过滤掉长度为 0 的行
      });
      var index = Math.floor(Math.random() * punishments.length);
      punishmentText = punishments[index];
      text.innerText = punishmentText;
    }
  };
  xhr.send();
}

function selectPunishment() {
  var punishmentText = "";
  var text = document.querySelector(".punishment-text");
  var images = document.querySelectorAll(".punishment-image");
  images[0].classList.remove("selected");
  images[1].classList.add("selected");
  
  var punishmentFile = "/text/dare.txt";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", punishmentFile, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var punishments = xhr.responseText.split("\n").filter(function(punishment) {
        return punishment.trim().length > 0; // 过滤掉长度为 0 的行
      });
      var index = Math.floor(Math.random() * punishments.length);
      punishmentText = punishments[index];
      text.innerText = punishmentText;
    }
  };
  xhr.send();
}

function selectTruth() {
  var truthText = "";
  var text = document.querySelector(".punishment-text");
  var images = document.querySelectorAll(".punishment-image");
  images[0].classList.add("selected");
  images[1].classList.remove("selected");
  
  var truthFile = "/text/truth.txt";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", truthFile, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var truths = xhr.responseText.split("\n").filter(function(truth) {
        return truth.trim().length > 0; // 过滤掉长度为 0 的行
      });
      var index = Math.floor(Math.random() * truths.length);
      truthText = truths[index];
      text.innerText = truthText;
    }
  };
  xhr.send();
}

function playAgain() {
  var punishmentText = "";
  var text = document.querySelector(".punishment-text");
  var punishmentFile = "/text/dare.txt";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", punishmentFile, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var punishments = xhr.responseText.split("\n").filter(function(punishment) {
        return punishment.trim().length > 0; // 过滤掉长度为 0 的行
      });
      var index = Math.floor(Math.random() * punishments.length);
      punishmentText = punishments[index];
      text.innerText = punishmentText;
    }
  };
  xhr.send();
}

function goToDetailPage() {
  window.location.href = "/code/detail.html";
}

function goToIndexPage() {
  var detailPage = document.getElementById("detail");
  detailPage.classList.add("hidden");
  var indexPage = document.getElementById("index");
  indexPage.classList.remove("hidden");
  indexPage.style.opacity = "";
}

var image1 = document.querySelector(".image1");
image1.addEventListener("click", function() {
  var gameFile = "/text/game.txt";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", gameFile, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var games = xhr.responseText.split("\n").filter(function(game) {
        return game.trim().length > 0; // 过滤掉长度为 0 的行
      });
      var index = Math.floor(Math.random() * games.length);
      var gameText = games[index];
      var title = document.querySelector(".title");
      title.innerText = "";
      var text = document.querySelector("#game-text");
      text.innerText = gameText;
      text.classList.remove("hidden");
      
      sessionStorage.setItem("gameText", gameText);
    }
  };
  xhr.send();
});

var image2 = document.querySelector(".image2");
image2.addEventListener("click", function() {
  showPunishmentPage();
});

var image3 = document.querySelector(".image3");
image3.addEventListener("click", function() {
  var detailPage = document.getElementById("detail");
  detailPage.classList.remove("hidden");
  var indexPage = document.getElementById("index");
  indexPage.classList.add("hidden");
  
  var detailText = "";
  var text = document.querySelector("#detail-text");
  var detailFile = "/text/detail.txt";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", detailFile, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var details = xhr.responseText.split("\n").filter(function(detail) {
        return detail.trim().length > 0; // 过滤掉长度为 0 的行
      });
      var index = Math.floor(Math.random() * details.length);
      detailText = details[index];
      text.innerText = detailText;
      
      sessionStorage.setItem("detailText", detailText);
    }
  };
  xhr.send();
});

var backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function() {
  goToIndexPage();
});

var playAgainButton = document.querySelector(".play-again-button");
playAgainButton.addEventListener("click", function() {
  playAgain();
});

var punishmentButton = document.querySelector(".punishment-button");
punishmentButton.addEventListener("click", function() {
  selectPunishment();
});

var truthButton = document.querySelector(".truth-button");
truthButton.addEventListener("click", function() {
  selectTruth();
});
