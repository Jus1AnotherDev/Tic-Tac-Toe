let currentPlayerSign = "";

const Player = () => {
    let playerSign = "";
    let playerScore = 0;
    return {playerSign, playerScore};
};

const playerOne = Player();
const playerTwo = Player();

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let playCount = 0;

function signSelector(selectedSign) {
    if (playerOne.playerSign == "") {
        playerOne.playerSign = selectedSign;
        currentPlayerSign = playerOne.playerSign;
        if (playerOne.playerSign == "X") {
            playerTwo.playerSign = "O";
        } else {
            playerTwo.playerSign = "X";
        }
    }
}

function updateScore(roundWinner) {
    roundWinner.playerScore += 1;
    if (roundWinner == playerOne) {
        let playerOneScoreBoard = document.getElementById("playerOneScore");
        playerOneScoreBoard.innerHTML = roundWinner.playerScore;
        playerOne.playerSign = "";
        playerTwo.playerSign = "";
        currentPlayerSign = "";
        playCount = 0;
    } else {
        let playerTwoScoreBoard = document.getElementById("playerTwoScore");
        playerTwoScoreBoard.innerHTML = roundWinner.playerScore;
        playerOne.playerSign = "";
        playerTwo.playerSign = "";
        currentPlayerSign = "";
        playCount = 0;
    }

    if (playerOne.playerScore == 3) {
        alert("Player 1 won the game!");
        window.location.reload(false);
    } else if (playerTwo.playerScore == 3) {
        alert("Player 2 won the game!");
        window.location.reload(false);
    }
}

function clearBoard() {
    button1.innerHTML = "";
    button2.innerHTML = "";
    button3.innerHTML = "";
    button4.innerHTML = "";
    button5.innerHTML = "";
    button6.innerHTML = "";
    button7.innerHTML = "";
    button8.innerHTML = "";
    button9.innerHTML = "";
}

function gridSquarePressed(buttonId) {
    let selectedButton = document.getElementById(buttonId);

    if (currentPlayerSign != "" && selectedButton.innerHTML == "") {
        selectedButton.innerHTML = currentPlayerSign;
        if (currentPlayerSign == playerOne.playerSign) {
            currentPlayerSign = playerTwo.playerSign;
        } else {
            currentPlayerSign = playerOne.playerSign;
        }
        playCount += 1;
    }


    if (button1.innerHTML === button2.innerHTML && button2.innerHTML === button3.innerHTML) {
        if (button1.innerHTML != "") {
            if (playerOne.playerSign == button1.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button4.innerHTML === button5.innerHTML && button5.innerHTML === button6.innerHTML) {
        if (button4.innerHTML != "") {
            if (playerOne.playerSign == button4.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button7.innerHTML === button8.innerHTML && button8.innerHTML === button9.innerHTML) {
        if (button7.innerHTML != "") {
            if (playerOne.playerSign == button7.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button1.innerHTML === button4.innerHTML && button4.innerHTML === button7.innerHTML) {
        if (button1.innerHTML != "") {
            if (playerOne.playerSign == button1.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button2.innerHTML === button5.innerHTML && button5.innerHTML === button8.innerHTML) {
        if (button2.innerHTML != "") {
            if (playerOne.playerSign == button2.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button3.innerHTML === button6.innerHTML && button6.innerHTML === button9.innerHTML) {
        if (button3.innerHTML != "") {
            if (playerOne.playerSign == button1.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button1.innerHTML === button5.innerHTML && button5.innerHTML === button9.innerHTML) {
        if (button1.innerHTML != "") {
            if (playerOne.playerSign == button1.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    if (button3.innerHTML === button5.innerHTML && button5.innerHTML === button7.innerHTML) {
        if (button3.innerHTML != "") {
            if (playerOne.playerSign == button3.innerHTML) {
                clearBoard();
                alert("Player 1 has won the round!");
                updateScore(playerOne);
            } else {
                clearBoard();
                alert("Player 2 has won the round!");
                updateScore(playerTwo);
            }
        }
    }

    console.log(playCount);

    if (playCount == 9) {
        playerOne.playerSign = "";
        playerTwo.playerSign = "";
        currentPlayerSign = "";
        playCount = 0;
        clearBoard();
    }
}