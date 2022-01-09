let pos = 580;    
function frame() {
  if (pos == -4) {
      pos= 580;
  } else {
    pos--; 
    block.style.left = pos + 'px'; 
  }
}
var id = setInterval(frame, 1);
let bob = document.getElementById("character")
let block = document.getElementById("block")
function jump(){
    if (character.classList.contains("animate")){return}

    if(character.classList !="animate"){
        bob.classList.add("animate")
    }
    setTimeout(function(){
       bob.classList.remove("animate")
    }, 500);
}
var score = 0;
var highscore =localStorage.getItem("highscore")
if(highscore===null){
    document.getElementById("highscore").innerHTML="Highscore : 0"
}
else{
    document.getElementById("highscore").innerHTML="Highscore :  "+highscore

}
var countscore = setInterval(() => {
    score++;
    document.getElementById("score").innerHTML=score
}, 50);
 setInterval(function() {
    var characterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blocKleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
    if(blocKleft<20 && blocKleft>-4 && characterTop>=140){
        if( score>=highscore){
            localStorage.setItem("highscore",score)
        }
        if(confirm('You lose \n \n Score : '+ score+' \n \n Play Again?')){
            location.reload();
            pos= 580;
        }
        else{
            clearInterval(countscore)
            clearInterval(id)
            block.style.left = 580 +'px'; 

        }            
    }
}, 10);
document.addEventListener("keypress", function(event) {
    if (event.key == ' ') {
      jump()
    }
  });

