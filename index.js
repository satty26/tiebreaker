var Player1 = prompt("Enter the name of Player One");
var Player2 = prompt("Enter the name of Player Two");
document.querySelector(".p1").innerHTML= Player1;
document.querySelector(".p2").innerHTML= Player2;
var randomInt = Math.floor(6*(Math.random())) + 1;
var randomInt2 = Math.floor(6*(Math.random())) + 1;
document.querySelector(".img1").setAttribute("src","images/dice" + randomInt + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomInt2 + ".png");
if (randomInt>randomInt2){
  document.querySelector("h1").textContent = Player1 + " Wins";
}
if (randomInt<randomInt2){
  document.querySelector("h1").textContent = Player2 + " Wins";
}
if(randomInt==randomInt2) {
  document.querySelector("h1").textContent = "Game is draw";
}
