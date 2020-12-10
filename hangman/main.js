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
        message.innerText = "You won :)"
        popupContainer.style.display = "flex"

    }
}

function showInfo() {
    infoContainer.classList.add("show")
    setTimeout(() => {
        infoContainer.classList.remove("show")
    }, 2000)
}

function updateWrongGuess() {
    wrongLetters.innerHTML = `
    ${wrongGuess.length > 0 ? "<p>Wrong</p>" : ""} 
    ${wrongGuess.map(letter => `<span>${letter}</span>`)}`
    figureParts.forEach((part, index) => {
        const err = wrongGuess.length
        if (index < err) {
            part.style.display = "block"
        } else {
            part.style.display = "none"
        }
    })
    if (wrongGuess.length === figureParts.length) {
        message.innerText = "You lost :("
        popupContainer.style.display = "flex"
    }
}

window.addEventListener("keydown", e => {
    const letter = e.key
    console.log(letter)
    if (selectedWord.includes(letter)) {
        if (!correctGuess.includes(letter)) {
            correctGuess.push(letter)
            showWord()
        } else {
            showInfo()
        }
    } else {
        if (!wrongGuess.includes(letter)) {
            wrongGuess.push(letter)
            updateWrongGuess()
        } else {
            showInfo()
        }
    }
})

play.addEventListener("click", () => {
    correctGuess.splice(0)
    wrongGuess.splice(0)
    selectedWord = someWords[Math.floor(Math.random() * someWords.length)]
    showWord()
    updateWrongGuess()
    popupContainer.style.display = "none"
})

showWord()
