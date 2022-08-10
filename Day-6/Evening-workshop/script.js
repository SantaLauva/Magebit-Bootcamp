// Add 81 divs
let board = document.querySelector('.game-field');

for (let i=0; i < 81; i++) {
    var div = document.createElement('div');
    div.className = 'square';
    div.id = 80-i;

    if (i > 71) {
        div.classList.toggle('first-line');
    }

    board.appendChild(div);
}

// Game
let symbol = "x";

board.onclick = function(event) {
    let cell = event.target;

    if (cell.innerHTML != '') return;

    if(cell.classList.contains('first-line') || (document.getElementById(cell.id - 9).innerHTML != '' )) {
        cell.innerHTML = symbol;
        if(checkWinner()) {
            let message = symbol + " is winner";
            showWinnerMessage(message);
        }
        symbol = (symbol == "x") ? "o" : "x";
    }    
}

let win_combinations = [];

// Izveido masīvu ar kombinācijām, kas nodrošina uzvaru. Tikai vertikālas un horizontālas. Nav diagonāles
for (let i = 0; i < 9; i++) {
    m = i * 9;
    for (m; m < i*9 + 6; m++) {
        // Horizontāle
        win_combinations.push([m, m+1, m+2, m+3]);
        // Diagonāle pa labi
        win_combinations.push([m, m+10, m+20, m+30]);
    }
    // Vertikāle
    n = i;
    for (n; n < i+6*9; n=n+9) {
        win_combinations.push([n, n+9, n+18, n+27]);
    }
    // // Diagonāle pa labi
    // k = i * 9;
    // for (k; k < i*9+6; k++) {
    //     win_combinations.push([k, k+10, k+20, k+30]);
    // }

    // // Diagonāle pa kreisi
    // k = i * 9 + 8;
    // for (k; k > i*9+2; k--) {
    //     win_combinations.push([k, k+8, k+16, k+24]);
    // }
}

function checkWinner() {
    for (let coord of win_combinations) {
        if (
            board.children[coord[0]].innerHTML == symbol &&
            board.children[coord[1]].innerHTML == symbol &&
            board.children[coord[2]].innerHTML == symbol &&
            board.children[coord[3]].innerHTML == symbol
        ) {
            return true;
        }
    }

    // Pārbauda diagonāles. Izmanto value


    return false;
}

function showWinnerMessage(message) {
    document.getElementsByClassName("winner-message")[0].style.display = "block";
    document.querySelector('.winner-message').innerHTML = message;
}


// Reset
let reset = document.querySelector('.reset');

reset.onclick = function(event) {
    for (let square of board.children) {
        square.innerHTML = "";
        symbol = "x";
    }
    document.getElementsByClassName("winner-message")[0].style.display = "none";
    document.querySelector('.winner-message').innerHTML = "";
}