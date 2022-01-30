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

      













        document.getElementById("right").addEventListener("touchstart", moveRight);
        document.getElementById("left").addEventListener("touchstart", moveLeft);