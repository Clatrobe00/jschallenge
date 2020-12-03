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
    var pcMove = yourChoice.id;
    console.log(pcMove);
    npcMove = rpsArr[randomChoice()];
    console.log(npcMove);
    results = decideWinner(pcMove, npcMove);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(pcMove, npcMove, message);
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
        return {"message": "You lose!", "color": "red"};
    } 
    if (results === 0.5) {
        return {"message": "Draw!", "color": "blue"};
    }
    if (results === 1) {
        return {"message": "You win!", "color": "green"};
    } 
}

function rpsFrontEnd(pcMove, npcMove, message) {
    var imageDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src 
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    var botDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imageDatabase[pcMove] + "'height=150px width=150px style='box-shadow: 0px 10px 50px rgba(37, 23, 233, 1'>";
    messageDiv.innerHTML = "<h1 style = 'color:" + message['color'] + "; font-size: 50px; padding: 30px'>" + message['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[npcMove] + "'height=150px width=150px style='box-shadow: 0px 10px 50px rgba(189, 23, 10, 1'>";

    document.getElementById("flex-box-rps").appendChild(humanDiv);
    document.getElementById("flex-box-rps").appendChild(messageDiv);
    document.getElementById("flex-box-rps").appendChild(botDiv);
}

// Challenge 4: Change the button colors

var allButtons = document.querySelectorAll('button');

var copyAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
    console.log(copyAllButtons);
}


function buttonColorChange(buttonChoice) {
    if (buttonChoice.id === 'btn-success' || buttonChoice.id === 'btn-primary' || buttonChoice.id === 'btn-danger') {
        setButtonColor(buttonChoice.id);
    }
    if (buttonChoice.id === 'random') {
        randomButtonColor();
    }
    if (buttonChoice.id === 'reset') {
        buttonReset();
    }
    
}

function setButtonColor (colorChoice) {
    console.log(colorChoice);
    allButtons.forEach((button) => {
        console.log(button.classList[1]);
        button.className = ''
        button.classList.add('btn');
        button.classList.add(colorChoice);
    });
}

function randomButtonColor () {
    var randomClass = ['btn-danger', 'btn-success', 'btn-primary']
    console.log('random');
    allButtons.forEach((button) => {
        button.className = ''
        button.classList.add('btn');
        button.classList.add(randomClass[Math.floor(Math.random() * 3)]);    
    })
    
}

function buttonReset () {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].className = ''
        allButtons[i].classList.add('btn');
        allButtons[i].classList.add(copyAllButtons[i]);
        
    }
}

