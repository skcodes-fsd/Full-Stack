var randomNumber1 = Math.ceil(Math.random() * 6);
var imageSource = "dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0].setAttribute("src", "./images/" + imageSource);
var randomNumber2 = Math.ceil(Math.random() * 6);
var imageSource2 = "dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1].setAttribute("src", "./images/" + imageSource2);

if (randomNumber1 > randomNumber2)  {
    document.querySelector("h1").innerHTML = "🎉Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🎉Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}