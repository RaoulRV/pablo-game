document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
  });
var pablo=document.getElementById("pablo");
function moveLeft(){
        let left = parseInt(window.getComputedStyle(pablo).getPropertyValue("left"));
        left -= 100;
        if(left>=0){
            pablo.style.left = left + "px";
        }
    }
function moveRight(){
            let left = parseInt(window.getComputedStyle(pablo).getPropertyValue("left"));
            left += 100;
            if(left<300){
                pablo.style.left = left + "px";
            }
        }

var obstacle = document.getElementById("obstacle");
var score=0;
obstacle.addEventListener('animationiteration', () => {
    score++;
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    obstacle.style.left = left + "px";
document.getElementById('score').innerText = "SCORE:" + score;

});


setInterval(function(){
    var pabloLeft = parseInt(window.getComputedStyle(pablo).getPropertyValue("left"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    if(pabloLeft==obstacleLeft && obstacleTop<500 && obstacleTop>300){
        alert("Game over. Score: ");
        obstacle.style.animation = "none";

    }
},50);
















