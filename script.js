/*--------------------------------*/
/* color game v2 refactored */
/*--------------------------------*/

var squares = document.querySelectorAll(".square");

var numberOfColors = 6;
var colors = generateColorArray(numberOfColors);

var pickedColor = colors[generateRandomNumber(numberOfColors - 1)];

var resetButton = document.querySelector("#reset");
var difficultyButtons = document.querySelectorAll(".difficulty");

function init() {
    displayColorToBeGuessed();

    for (var i = 0; i < squares.length; i++) {
        //apply the color of arrays to the squares
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor == pickedColor) {
                document.querySelector("#status").textContent = "Correct!";
                document.querySelector("h1").style.backgroundColor = pickedColor;

                colorAll();

                document.querySelector("#reset").textContent = "play again";
            } else {
                document.querySelector("#status").textContent = "Try again.";
                this.style.backgroundColor = "transparent";
            }
        });
    }
}

init();

function reset() {
    colors = generateColorArray(numberOfColors);
    pickedColor = colors[generateRandomNumber(numberOfColors - 1)];
    displayColorToBeGuessed();

    document.querySelector("#status").textContent = "";
    resetButton.textContent = "new game";

    for (var j = 0; j < squares.length; j++) {
        if (colors[j]) { //if not null
            squares[j].style.display = "block";
            squares[j].style.backgroundColor = colors[j];
        } else {
            console.log("test");
            squares[j].style.display = "none";
        }
    }

}

for (var i = 0; i < difficultyButtons.length; i++) {
    difficultyButtons[i].addEventListener("click", function () {
        difficultyButtons[0].classList.remove("selected");
        difficultyButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent == "EASY" ? numberOfColors = 3 : numberOfColors = 6;

        reset();

    })
}

resetButton.addEventListener("click", function () {
    reset();
})

//generates 0 to max
function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

//rgb color generator
function generateRandomColor() {

    var theColor = "rgb(";

    theColor += generateRandomNumber(255) + ", " + generateRandomNumber(255) + ", " + generateRandomNumber(255) + ")";

    return theColor;
}

//returns an array of six colors
function generateColorArray(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(generateRandomColor());
    }

    return arr;
}


function colorAll() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function displayColorToBeGuessed() {
    document.querySelector("#color-to-be-guessed-display").textContent = pickedColor;
}
