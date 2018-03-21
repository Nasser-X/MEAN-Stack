var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var limit = document.querySelector("input[type='number']");
var winningDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var game = false;
var score = 5;

p1Button.addEventListener("click", function(){
    if(!game){
        p1Score++;
        if(p1Score === score){
            p1Display.classList.add("winner");
            game = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!game){
        p2Score++;
        if(p2Score === score){
            p2Display.classList.add("winner");
            game = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    game = false;
}

limit.addEventListener("change", function(){
    winningDisplay.textContent = limit.value;
    score = Number(limi.value);
});