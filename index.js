var randomNumber1 = Math.floor((Math.random()*6)+1);
// console.log(randomNumber1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
// console.log(randomNumber2);
var randomNumber3 = Math.floor((Math.random()*6)+1);
// console.log(randomNumber3);


/* Mo3tasem Random No. */
if(randomNumber1 === 1){
    document.getElementById("img1").setAttribute("src","images/dice1.png");
}else if(randomNumber1 === 2)
{
    document.getElementById("img1").setAttribute("src","images/dice2.png");
}else if(randomNumber1 === 3)
{
    document.getElementById("img1").setAttribute("src","images/dice3.png");
}else if(randomNumber1 === 4)
{
    document.getElementById("img1").setAttribute("src","images/dice4.png");
}else if(randomNumber1 === 5)
{
    document.getElementById("img1").setAttribute("src","images/dice5.png");
}else
{
    document.getElementById("img1").setAttribute("src","images/dice6.png");
}

/* Safwat Random No. */
if(randomNumber2 === 1){
    document.getElementById("img2").setAttribute("src","images/dice1.png");
}else if(randomNumber2 === 2)
{
    document.getElementById("img2").setAttribute("src","images/dice2.png");
}else if(randomNumber2 === 3)
{
    document.getElementById("img2").setAttribute("src","images/dice3.png");
}else if(randomNumber2 === 4)
{
    document.getElementById("img2").setAttribute("src","images/dice4.png");
}else if(randomNumber2 === 5)
{
    document.getElementById("img2").setAttribute("src","images/dice5.png");
}else
{
    document.getElementById("img2").setAttribute("src","images/dice6.png");
}

/* Ammar Random No. */
if(randomNumber3 === 1){
    document.getElementById("img3").setAttribute("src","images/dice1.png");
}else if(randomNumber3 === 2)
{
    document.getElementById("img3").setAttribute("src","images/dice2.png");
}else if(randomNumber3 === 3)
{
    document.getElementById("img3").setAttribute("src","images/dice3.png");
}else if(randomNumber3 === 4)
{
    document.getElementById("img3").setAttribute("src","images/dice4.png");
}else if(randomNumber3 === 5)
{
    document.getElementById("img3").setAttribute("src","images/dice5.png");
}else
{
    document.getElementById("img3").setAttribute("src","images/dice6.png");
}

/* Winner Display */
if(randomNumber1 === randomNumber2 && randomNumber1 === randomNumber3){
    document.querySelector("h1").textContent = "It's a Draw!"
}else if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3){
    document.querySelector("h1").textContent = "Mo3tasem Wins!!"
    document.querySelector("#mo").classList.add("winner-highlight");
}else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3){
    document.querySelector("h1").textContent = "Safwat Wins!!"
    document.querySelector("#sa").classList.add("winner-highlight");
}else if(randomNumber3 > randomNumber2 && randomNumber3 > randomNumber1){
    document.querySelector("h1").textContent = "Ammar Wins!!"
    document.querySelector("#am").classList.add("winner-highlight");
}else if(randomNumber1 === randomNumber2 && randomNumber1 > randomNumber3){
    document.querySelector("h1").textContent = "Ammar the loser!!"
    document.querySelector("#am").classList.add("loser-highlight");
}else if(randomNumber2 === randomNumber3 && randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Mo3tasem the loser!!"
    document.querySelector("#mo").classList.add("loser-highlight");
}else if(randomNumber1 === randomNumber3 && randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Safwat the loser!!"
    document.querySelector("#sa").classList.add("loser-highlight");
}