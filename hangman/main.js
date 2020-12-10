const word = document.getElementById("word")
const wrongLetters = document.getElementById("wrong-letters")
const popupContainer = document.getElementById("popup-container")
const play = document.getElementById("play")
const infoContainer = document.getElementById("info-container")
const message = document.getElementById("message")

const figureParts = document.querySelectorAll(".figure-part")

const wrongGuess = []
const correctGuess = []

const someWords = ["constant", "variable", "function", "programmer", "hackathon", "startup", "hardware", "computer"]

let selectedWord = someWords[Math.floor(Math.random() * someWords.length)]


function showWord() {
    word.innerHTML = `${selectedWord.split("").map(letter => ` <span class="letter">${correctGuess.includes(letter) ? letter : ""}</span>`).join("")}`
    const innerWord = word.innerText.replace(/\n/g, "")
    if (innerWord === selectedWord) {
        message.innerText = "You won!"
        popupContainer.style.display = "flex"

    }
}

showWord()
