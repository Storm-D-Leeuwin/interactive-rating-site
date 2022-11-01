'use strict';

let score = 0;
let clicked = [false, false, false, false, false];


// document.querySelector('.submit').addEventListener('click', () => {


//     if (document.querySelector('#n1').classList.contains("check")) {
//         console.log('sasas')
//     }

// })

document.querySelectorAll('.block').forEach((blocks, index) => {

 

    if (!blocks.classList.contains('check')) {
        blocks.addEventListener('click', () => {
            for (let i = 0; i < 5; i++) {
                if (clicked[i] = true) {
                    clicked[index] = false;
                }
            }

            if (clicked[0] === false) {
                document.getElementById('n1').classList.add('check');
                document.getElementById('n2').classList.remove('check');
                document.getElementById('n3').classList.remove('check');
                document.getElementById('n4').classList.remove('check');
                document.getElementById('n5').classList.remove('check');
            }

            if (clicked[1] === false) {
                document.getElementById('n1').classList.remove('check');
                document.getElementById('n2').classList.add('check');
                document.getElementById('n3').classList.remove('check');
                document.getElementById('n4').classList.remove('check');
                document.getElementById('n5').classList.remove('check');
            }

            if (clicked[2] === false) {
                document.getElementById('n1').classList.remove('check');
                document.getElementById('n2').classList.remove('check');
                document.getElementById('n3').classList.add('check');
                document.getElementById('n4').classList.remove('check');
                document.getElementById('n5').classList.remove('check');
            }

            if (clicked[3] === false) {
                document.getElementById('n1').classList.remove('check');
                document.getElementById('n2').classList.remove('check');
                document.getElementById('n3').classList.remove('check');
                document.getElementById('n4').classList.add('check');
                document.getElementById('n5').classList.remove('check');
            }

            if (clicked[4] === false) {
                document.getElementById('n1').classList.remove('check');
                document.getElementById('n2').classList.remove('check');
                document.getElementById('n3').classList.remove('check');
                document.getElementById('n4').classList.remove('check');
                document.getElementById('n5').classList.add('check');
            }

        })
    }

})

document.querySelector('.submit').addEventListener('click',() => {

    if (document.getElementById('n1').classList.contains('check')) {
        score = 1;
    } else if (document.getElementById('n2').classList.contains('check')) {
        score = 2;
    } else if (document.getElementById('n3').classList.contains('check')) {
        score = 3;
    } else if (document.getElementById('n4').classList.contains('check')) {
        score = 4;
    } else if (document.getElementById('n5').classList.contains('check')) {
        score = 5;
    }

    if(!score == 0) {
        document.querySelector('.container-inside').classList.add('hidden');
        document.querySelector('.wrapper').classList.remove('hidden');

        document.querySelector('.selected-score').innerHTML = score;
    }
    console.log(score);

})

