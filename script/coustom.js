'use strict';
//  file
const tap = new Audio('../sound/tap.mp3');
const win = new Audio('../sound/win.mp3');
// index id select file

const selectBox = document.querySelectorAll('.border');
const addXO = document.querySelectorAll('#addXO');
const turn = document.getElementById('turn');
const winer = document.getElementById('winer');
const turn2 = document.getElementById('turn2');
const xTurn = document.getElementById('xx');
const oTurn = document.getElementById('oo');
const contan = document.getElementsByClassName('container');
const winerCl = document.getElementsByClassName('winer')
    // box click function start
let whatMark = 'o';
selectBox.forEach((element, i) => {
        element.addEventListener('click', function() {;
            let mark = whatMark;
            addXO[i].innerHTML = mark;
            checkIsXY()
            tap.play();
            isGameWin(i, mark);
        })
    })
    //  x o change 
function checkIsXY() {
    if (whatMark == 'x') {
        whatMark = 'o';
    } else {
        whatMark = 'x';
    }
    turn.innerHTML = `Now turn of: ${whatMark}`;

    if (whatMark == 'x') {
        turn.style.display = 'block';
        turn.classList.add('spa');
        turn.innerHTML = 'Now turn of: ' + whatMark;
        turn2.style.display = 'none';
    } else {
        turn2.style.display = 'block';
        turn2.classList.add('spa');
        turn2.innerHTML = 'Now turn of: ' + whatMark;
        turn.style.display = 'none';
    }
    return whatMark;
}
// game win check 
function isGameWin(i, mark) {
    let boxItem = document.getElementsByClassName('border')
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach((iAm) => {
        if ((boxItem[iAm[0]].innerText === boxItem[iAm[1]].innerText) && (boxItem[iAm[2]].innerText === boxItem[iAm[1]].innerText) && (boxItem[iAm[0]].innerText !== '')) {

            winer.innerHTML = 'The winer is: ' + boxItem[iAm[0]].innerText;
            winerExtra();
            setTimeout(function() {
                location.reload();
            }, 3000)

        }
    })
}

function winerExtra() {
    contan[0].style.display = 'none';
    winerCl[0].style.display = 'block';
    win.play();
}