let RandomNumber1 = Math.floor(Math.random() * 6) + 1
let imgsrc = "images/dice" + RandomNumber1 + ".png"
let image = document.querySelectorAll("img")[0].setAttribute("src", imgsrc)


let RandomNumber2 = Math.floor(Math.random() * 6) + 1
let imgsrc1 = "images/dice" + RandomNumber2 + ".png"
let image1= document.querySelectorAll("img")[1].setAttribute("src", imgsrc1)


if (RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win"
}else if(RandomNumber1 < RandomNumber2 ){
    document.querySelector("h1").innerHTML = "player 2 win"
}else {
    document.querySelector("h1").innerHTML = "draw game"
}