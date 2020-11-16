// Challenge 1 Your Age in Days (but if the guy was honest this just tells you how many days are in a span of years)
function yearsToDays () {
    var userYear = prompt("Enter a year");
    var convertYearsToDays = (2020 - userYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(convertYearsToDays + ' days have passed since ' + userYear + '.');
    h1.setAttribute('id', 'convertYearsToDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset () {
    document.getElementById('convertYearsToDays').remove('id', 'convertYearsToDays');
}

// Challenge 2: Cat Generator

function generateCat () {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock Paper Scissors Game

var rpsArr = ["rock", "paper", "scissors"];

function rpsGame (yourChoice) {
    //var pcMove, npcMove;
    var pcMove = yourChoice.id;
    console.log(pcMove);
    npcMove = rpsArr[randomChoice()];
    console.log(npcMove);
    results = decideWinner(pcMove, npcMove);
    message = finalMessage(results);
    console.log(message);
//    rpsFrontEnd(yourChoice.id, botChoice, message)
//};
}


function randomChoice() {
    var randInt = Math.floor(Math.random() * 3);
    return randInt;
}

function decideWinner(pcMove, npcMove) {
    var rpsDatabase = {
        "rock": {"rock": 0.5, "paper": 0, "scissors": 1},
        "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
        "scissors": {"rock": 0, "paper": 1, "scissors": 0.5}
    }

    var yourScore = rpsDatabase[pcMove][npcMove];
    return yourScore;
}

function finalMessage(results) {
    if (results === 0) {
        message = "You lose!"
    } 
    if (results === 0.5) {
        message = "Draw!"
    }
    if (results === 1) {
        message = "You win!"
    }

    return message
}



