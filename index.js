let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let imgNo = "dice" + randomNumber1 +".png";

let imgSrc = "images/" + imgNo;

let image1 =  document.querySelectorAll("img")[0];

image1.setAttribute("src", imgSrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let imgSrc2 = "images/dice" + randomNumber2 + ".png";

let image2 =  document.querySelectorAll("img")[1];

image2.setAttribute("src", imgSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }