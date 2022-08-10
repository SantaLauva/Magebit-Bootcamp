function addToWrapper(element) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(element);
}

function createCell(id) {
    const cell = document.createElement('div');
    cell.setAttribute('id', id);
    cell.setAttribute('class', 'cell');
    return cell;
}

const gameData = [];
var currentVal = 0;
const patterns = [1, 10, 11, 9];

function validateGame() {
    const x = [];
    const o = [];

    gameData.forEach((data, index) => {
        if (data === '') {
            return;
        }

        if (data === 'x') {
            x.push(index);
        } else {
            o.push(index);
        }
    });

    // x.forEach((val) => {
    //     let XisValid = true;
    //     patterns.forEach((pat) => {
    //         for (let match = 1; match <= 4; match++) {
    //             if (!x.contains(pat + val)) {
    //                 XisValid = false;
    //             }
    //         }
    //     });
    // });


    // o.forEach((val) => {
    //     patterns.forEach((pat) => {
    //         let OisValid = true;
    //         for (let match = 1; match <= 4; match++) {
    //             if (!o.contains(pat + val)) {
    //                 OisValid = false;
    //             }
    //         }
    //     });
    // });

    // if (XisValid || OisValid){
    //     return false;
    // }


    console.log(x, o);

    return true;
}

function handleGame(event) {
    if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
        return;
    }

    let Id = event.target.id;
    let isValid = validateGame();

    if (!isValid) {
        return;
    }

    currentVal++;

    if (currentVal % 2 == 0) {
        event.target.classList.add('x');
        gameData[Id] = 'x';
    } else {
        event.target.classList.add('o');
        gameData[Id] = 'o';
    }

    window.a = gameData;
    console.log(event.target);
}

for (let i = 1; i <= 100; i++) {
    gameData.push(''); // Game date
    let data = createCell(i); // Representation of data
    data.addEventListener('click', (event) => {
        handleGame(event);
    })
    addToWrapper(data);
}








//let data = [];
//for(let i=0;i<= 9; i++){
//    for(let j=0;j<=9; j++){
//     data.push({x:i, y:j});
//    }
//}
//
//console.(data);