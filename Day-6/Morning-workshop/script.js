click = true;
let squares = document.querySelectorAll('.square');

for (let i=0; i<squares.length; i++) {
    squares[i].onclick = function(event) {
        if (! this.classList.contains('active')) {
            click = !click;
            if (click) {
                this.innerHTML = "X";
                checkWinner("X")
            } 
            else {
                this.innerHTML = "O";
                checkWinner("O")
            } 
            this.classList.toggle("active");
        }  
    }
}

let reset = document.querySelector('.reset');

reset.onclick = function(event) {
        squares.forEach(
        (square) => {
            if (square.classList.contains('active')) {
                square.classList.remove("active");
                square.innerHTML = "";
            }

            document.getElementsByClassName("winner-message")[0].style.display = "none";
    document.querySelector('.winner-message').innerHTML = "";
        })
}

function checkWinner(value) {
    // 123
    if (document.getElementById("1").innerHTML == value) {
        if (document.getElementById("2").innerHTML == value) {
            if (document.getElementById("3").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }

    //456
    if (document.getElementById("4").innerHTML == value) {
        if (document.getElementById("5").innerHTML == value) {
            if (document.getElementById("6").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }

    //789
    if (document.getElementById("7").innerHTML == value) {
        if (document.getElementById("8").innerHTML == value) {
            if (document.getElementById("9").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }

    //147
    if (document.getElementById("1").innerHTML == value) {
        if (document.getElementById("4").innerHTML == value) {
            if (document.getElementById("7").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }

    //258
    if (document.getElementById("2").innerHTML == value) {
        if (document.getElementById("5").innerHTML == value) {
            if (document.getElementById("8").innerHTML == value) {
                winnerMessage(value);
                return; 
            }
        }
    }

    //369
    if (document.getElementById("3").innerHTML == value) {
        if (document.getElementById("6").innerHTML == value) {
            if (document.getElementById("9").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }

    //159
    if (document.getElementById("1").innerHTML == value) {
        if (document.getElementById("5").innerHTML == value) {
            if (document.getElementById("9").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }

    //357
    if (document.getElementById("3").innerHTML == value) {
        if (document.getElementById("5").innerHTML == value) {
            if (document.getElementById("7").innerHTML == value) {
                winnerMessage(value); 
                return;
            }
        }
    }
}

function winnerMessage(value) {
    document.getElementsByClassName("winner-message")[0].style.display = "block";
    document.querySelector('.winner-message').innerHTML = value + " is winner";
}