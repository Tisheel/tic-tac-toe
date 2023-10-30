let gameOver
let filledBoxs
let currentPlayer
let game = [[], [], []]

const player1 = {
    name: "",
    symbol: "❌",
    score: 0
}

const player2 = {
    name: "",
    symbol: "⭕",
    score: 0
}

while (true) {
    player1.name = prompt("Name Player 1")
    player2.name = prompt("Name Player 2")

    if (player1.name && player2.name && player1.name !== player2.name) break
}

const result = document.getElementById('result')
const turn = document.getElementById('turn')
const playAgainBtn = document.getElementById('playAgain')
const boxs = document.getElementsByClassName('box')
const playerOneName = document.getElementById('playerOneName')
const playerTwoName = document.getElementById('playerTwoName')
const playerOneScore = document.getElementById('playerOneScore')
const playerTwoScore = document.getElementById('playerTwoScore')

const startGame = () => {
    currentPlayer = player1
    turn.innerText = currentPlayer.name
    gameOver = false
    filledBoxs = 0
    playerOneName.innerText = player1.name
    playerTwoName.innerText = player2.name
    playerOneScore.innerText = player1.score
    playerTwoScore.innerText = player2.score
}
startGame()

const boxClick = (e) => {
    if (gameOver) return

    filledBoxs++

    e.innerText = currentPlayer.symbol

    game[e.dataset.m][e.dataset.n] = currentPlayer.symbol

    currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1
    turn.innerText = currentPlayer.name

    const res = validGame()

    if (res === "❌") {
        result.innerText = `${player1.name} Won 🎉🎉`
        player1.score = player1.score + 1
        playerOneScore.innerHTML = player1.score
        gameOver = true
        playAgainBtn.style.display = "block"
    } else if (res === "⭕") {
        result.innerText = `${player2.name} Won 🎉🎉`
        player2.score = player2.score + 1
        playerTwoScore.innerHTML = player2.score
        gameOver = true
        playAgainBtn.style.display = "block"
    } else if (filledBoxs === 9 && res === undefined) {
        result.innerText = `Draw 😑`
        gameOver = true
        playAgainBtn.style.display = "block"
    }
}

const playAgain = () => {
    filledBoxs = 0
    currentPlayer = player1
    turn.innerText = currentPlayer.name
    result.innerText = ""
    gameOver = false
    game = [[], [], []]

    for (let box of boxs) {
        box.innerText = ""
    }

    playAgainBtn.style.display = "none"
}

const validGame = () => {
    if (game[0][0] === game[0][1] && game[0][0] === game[0][2]) return game[0][0]
    if (game[1][0] === game[1][1] && game[1][0] === game[1][2]) return game[1][0]
    if (game[2][0] === game[2][1] && game[2][0] === game[2][2]) return game[2][0]

    if (game[0][0] === game[1][0] && game[0][0] === game[2][0]) return game[0][0]
    if (game[0][1] === game[1][1] && game[0][1] === game[2][1]) return game[0][1]
    if (game[0][2] === game[1][2] && game[0][2] === game[2][2]) return game[0][2]

    if (game[0][0] === game[1][1] && game[0][0] === game[2][2]) return game[0][0]
    if (game[0][2] === game[1][1] && game[0][2] === game[2][0]) return game[0][2]
}