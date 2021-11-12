const brackets = document.querySelectorAll('.bracket')
const win = document.querySelector('.win')

const winX = document.querySelector('.winX')
const winO = document.querySelector('.winO')


// Giving a round 0 and 1 to interchange between the two players
var rounds = 0
var clickCounter = 0

// Given the all outcome of a possibla win
const winningStreak = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],


]
// looping the brackets as a div 
brackets.forEach(bracket => {
  //When clicked bring into action and fill with X or O depends on the round as mentioned above (0 or 1)
  bracket.addEventListener('click', function () {

    if (rounds == 0 && bracket.classList == "bracket") {
      bracket.classList.add("fillX")
      clickCounter++
      rounds++
    } else if (rounds == 1 && bracket.classList == "bracket") {
      bracket.classList.add("fillO")
      clickCounter++
      rounds--

    }
    //Set timeout to give a motion to process the implementation
    setTimeout(checkWin, 300)


  })


})

//If above mentioned winnin scenarios are on actions then X or O will win
function checkWin() {

  for (let i = 0; i < winningStreak.length; i++) {
    let bracket1 = brackets[winningStreak[i][0]]
    let bracket2 = brackets[winningStreak[i][1]]
    let bracket3 = brackets[winningStreak[i][2]]


    if (bracket1.classList.contains('fillX') &&
      bracket2.classList.contains('fillX') &&
      bracket3.classList.contains('fillX')) {

      win.textContent = "X won!"
      win.style.color = "red"
      setTimeout(removeTable, 1000)


    }


    if (bracket1.classList.contains('fillO') &&
      bracket2.classList.contains('fillO') &&
      bracket3.classList.contains('fillO')) {

      win.textContent = "O won!"
      win.style.color = "blue"


      setTimeout(removeTable, 1000)


    }
    //In case all the 9 brackets are filled, no one fill win it will be a draw

    if (clickCounter == 9 && win.textContent != "X won!" && win.textContent != "O won!") {
      win.textContent = "Draw!"

      win.style.color = "yellow"
      setTimeout(removeTable, 1000)

    }


  }

}

//Remove the brackets values and a new round begins
function removeTable() {

  brackets.forEach(bracket => {
    bracket.classList.remove('fillX')
    bracket.classList.remove('fillO')
    win.textContent = "Tic-Ttac-Toe"
    win.style.color = "black"


  })

  //Click counter will be set to null so we can start from new
  clickCounter = 0


}