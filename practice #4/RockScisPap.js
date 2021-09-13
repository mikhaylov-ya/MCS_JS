const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player === computer) console.log('no one wins')
else if ((player === scissors && computer === paper) || (player === paper && computer === rock) || (player === rock && computer === rock)) console.log('player win')
else console.log('computer win')

//Альтернативный варианнт второго условия
// if ((player < computer) && !(player === rock && computer === paper) || player === paper && computer === rock) console.log('player win')

