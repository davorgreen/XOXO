let container = document.querySelector('.container');
createGrid();
let allBoxes = document.querySelectorAll('.box');
let allLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let sign = 'O';

function createGrid() {
    for (let i = 0; i < 9; i++) {
        let box = document.createElement('DIV');
        box.className = "box";
        box.addEventListener('click',insertSign);
        container.appendChild(box);    
    }
}

function insertSign() {
    this.removeEventListener('click',insertSign);
    if (sign ==="O") {
        sign = 'X';
    } else {
        sign = 'O';
    }
    this.innerHTML = sign;
    checkLines();
}

function checkLines() {
    // if (allBoxes[0].innerHTML === allBoxes[1].innerHTML && allBoxes[0].innerHTML === allBoxes[2].innerHTML && allBoxes[0].innerHTML != "") { 
    //     allBoxes[0].style.background = "lightgreen";
    //     allBoxes[1].style.background = "lightgreen";
    //     allBoxes[2].style.background = "lightgreen";
    // }
    
    allLines.forEach(line => {
        let box1 = allBoxes[line[0]]; 
        let box2 = allBoxes[line[1]]; 
        let box3 = allBoxes[line[2]];
        
        if (box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box1.innerHTML !=""){
            box1.style.background = "green";
            box2.style.background = "green";
            box3.style.background = "green";
            stopGame();
        }
    });
}

function stopGame() {
    allBoxes.forEach(box => box.removeEventListener('click', insertSign));
}