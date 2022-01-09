var requestAnimationFrame = window.requestAnimationFrame || 
window.mozRequestAnimationFrame || 
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame;

window.requestAnimationFrame = requestAnimationFrame;
//grabbing the elements
let bob = document.getElementById("character")
let block = document.getElementById("block")
//small block animation
let pos = 580;
let i =1;    
function frame() {
  if (pos < -1) {
      pos= 580;
  }  
  if(score>=100*i){
    i++;
} 
if(i>5){
    pos= pos -i*0.2;
} 
 
else{
        pos--
    }
     block.style.left = pos + 'px';
}      
var id = setInterval(frame, i);
// jump function for the big block
function jump(){
    if (character.classList.contains("animate")){return}

    if(character.classList !="animate"){
        bob.classList.add("animate")
    }
    setTimeout(function(){
       bob.classList.remove("animate")
    }, 500);
}
// score & highscore counnt & display
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


// hit detection
 setInterval(function() {
    var characterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blocKleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
    if(blocKleft<8 && blocKleft>-4 && characterTop>=140){
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
            highscore = localStorage.getItem("highscore")
            document.getElementById("highscore").innerHTML="Highscore :  "+highscore
        }            
    }
}, 10);
// space bar detection for jumping
document.addEventListener("keypress", function(event) {
    if (event.key == ' ') {
      jump()
    }
  });
  requestAnimationFrame(frame);
  requestAnimationFrame(jump);