let name1, name2
let count = 0

while (true) {
    name1 = prompt("Name Player 1")
    name2 = prompt("Name Player 2")

    if (name1 && name2 && name1 !== name2) break
}


const player1 = {
    name: name1,
    symbol: "X"
}

const player2 = {
    name: name2,
    symbol: "O"
}

const game = [[], [], []]

let currentPlayer = player1
document.getElementById('turn').innerText = currentPlayer.name

const boxClick = (e) => {
    const win = document.getElementById('win')
    count++
    e.innerText = currentPlayer.symbol
    game[e.dataset.m][e.dataset.n] = currentPlayer.symbol
    currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1
    document.getElementById('turn').innerText = currentPlayer.name
    const res = validGame()
    if (res === "X") {
        win.innerText = `${player1.name} Won 🎉🎉`
        setTimeout(() => {
            window.location.reload()
        }, 3000)
    }
    if (res === "O") {
        win.innerText = `${player2.name} Won 🎉🎉`
        setTimeout(() => {
            window.location.reload()
        }, 3000)
    }
    if (count === 9) {
        win.innerText = `Draw 😑`
        setTimeout(() => {
            window.location.reload()
        }, 3000)
    }
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