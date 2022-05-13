import {questions} from "./questions.js" //Importowanie tablicy z quesions.js

//PRZEKSZTAŁCENIE STRINGA NA TABLICE DWUWYMIAROWA\
const plstring = localStorage.getItem("players").split(",")
const howmanyplayers = localStorage.getItem("numberofplayers")
const gracze = new Array(howmanyplayers)
let y = 0
let h = 4
for (let x = 0; x < howmanyplayers; x++) {
  let f = 0
  gracze[x] = new Array(4)
  while (y < h) {
    gracze[x][f] = plstring[y]
    f++
    y++
  }
  h += 4
}

//WYŚWIETLENIE PRZYCISKÓW START
document.getElementById("porana").innerHTML = "Wciśnij start"
document.getElementById("herechallenge").innerHTML = "START"
document.getElementById("heredrink").innerHTML = "START"

//WYŚWIETLENIE GRACZY NA NAVBARZE
let plus1 = 1
playerbar = document.getElementById("playerbar")
for (let j = 0; j < howmanyplayers; j++) {
  playerbar.innerHTML += '<div class="playerfish" id="playerfish' + j + '">🤠<br>' + gracze[j][1] + "</div>"
  plus1++
}

//wyświetlenie pytania
function wyswietl() {
  document.getElementById("herechallenge").innerHTML = questions[Math.floor(Math.random() * questions.length)]

  //wyświetlenie wypicia
  document.getElementById("heredrink").innerHTML = "Wypij " + (Math.floor(Math.random() * 2) + 2) + "🥃"
}

//ZMIANA PYTAN I REJESTROWANIE KLIKU
const ile_wypil = 0
const ile_odpowiedzial = 0
const buttons = document.querySelectorAll(".inner")
let kto = 0
let start = 0
buttons.forEach(click => {
  click.addEventListener("click", () => {
    document.getElementById("porana").innerHTML = "Pora na " + gracze[kto][1]

    if (start < 1) {
      start++
    } else {
      if (click.value == "mow") {
        console.log(gracze[kto][1])
        console.log("--------" + kto)
        console.log("mowie")
      }
      if (click.value == "pij") {
        console.log("pije")
      }
      kto++

      if (kto == howmanyplayers) {
        kto = 0
      }
    }
    wyswietl()
  })
})
