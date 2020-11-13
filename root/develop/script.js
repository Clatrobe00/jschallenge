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
