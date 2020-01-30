var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var resetbtn = document.querySelector("#tryAgain");
var modebtn = document.querySelectorAll(".mode");

init();

function init(){
    btnsetup();
    squaresetup();
    reset();
}

function btnsetup(){
    for(var i=0; i<modebtn.length; i++){
        modebtn[i].addEventListener("click", function(){
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
    resetbtn.addEventListener("click", function(){
        reset();
    });
}

function squaresetup(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor===pickedColor){
                document.querySelector("#status").textContent = "Correct!";
                colorChange(pickedColor);
                document.querySelector("h1").style.backgroundColor = pickedColor;
                resetbtn.textContent = "Play Again?"
            }else{
                this.style.backgroundColor = "#232323";
                document.querySelector("#status").textContent = "Try again";
            }
        })
    }
}

function reset() {
    document.querySelector("#status").textContent = "";
    colors = getRandomColor(numSquares);
    pickedColor = pickColor();
    document.querySelector("#header").textContent = pickedColor;
    for(var j=0; j<squares.length; j++){
        if(colors[j]){
            squares[j].style.display = "block";
            squares[j].style.backgroundColor = colors[j];
        }else{
            squares[j].style.display = "none";
        }
    }
    document.querySelector("h1").style.backgroundColor = "steelblue";
    resetbtn.textContent = "New Colours";
}

function colorChange (color) {
    for(var i=0; i<numSquares; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var rand = Math.floor(Math.random()*colors.length);
    return colors[rand];
}

function getRandomColor(num) {
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

