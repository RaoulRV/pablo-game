var score = 0;
var obstacle = document.getElementById("obstacle");
var game = document.getElementById("game");
var restart = document.getElementById("gover");
var pablo = document.getElementById("pablo");
var not = document.getElementById("not");
var left;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

function moveLeft() {
  let left = parseInt(window.getComputedStyle(pablo).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
    pablo.style.left = left + "px";
  }
}
function moveRight() {
  let left = parseInt(window.getComputedStyle(pablo).getPropertyValue("left"));
  left += 100;
  if (left < 300) {
    pablo.style.left = left + "px";
  }
}

obstacle.addEventListener("animationiteration", () => {
  score++;
  var random = Math.floor(Math.random() * 3);
  left = random * 100;
  obstacle.style.left = left + "px";
  document.getElementById("score").innerText = "SCORE:" + score;

  setInterval(function () {
    var pabloLeft = parseInt(
      window.getComputedStyle(pablo).getPropertyValue("left")
    );
    var obstacleLeft = parseInt(
      window.getComputedStyle(obstacle).getPropertyValue("left")
    );
    var obstacleTop = parseInt(
      window.getComputedStyle(obstacle).getPropertyValue("top")
    );
    if (pabloLeft == obstacleLeft && obstacleTop < 500 && obstacleTop > 300) {
      obstacle.style.animation = "none";
      pablo.style.animation = "none";
      game.style.animation = "none";
      restart.style.display = "block";
      not.style.display = "block";
      restart.onclick = function () {
        location.reload();
        return false;
      };
    }
  }, 50);
});

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);
