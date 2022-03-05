function randomfun(){

    // litt irriterende hvordan m-en i math er case sensitive tok litt tid å finne ut den error messagen
    // hadde opprinnelig mer rotete funksjon men ryddet opp i variablen når jeg så løsningen bare en endring i formatering
var n = Math.floor(Math.random() * 6) + 1
var n2 = Math.floor(Math.random() * 6) + 1


    // elsker hvor effektivt og kort jeg greide denne funksjonen på første forsøk
     document.querySelector(".img1").setAttribute("src" , "../images/dice" + n + ".png");

     document.querySelector(".img2").setAttribute("src" , "../images/dice" + n2 + ".png");

     
     if( n > n2 ){
         document.querySelector("h1").innerHTML = "Player 1 Wins!"
     } else if( n < n2 ){
         document.querySelector("h1").innerHTML = "Player 2 Wins!"
     } else {
         document.querySelector("h1").innerHTML = "Draw!"
     }

}

randomfun()