let totalCash = parseFloat(prompt('How much $$$?'));
let watchesCount = parseInt(prompt('How many watches?'));
let earringsCount = parseInt(prompt('How many earrings?'));

let watchesSum = watchesCount * parseFloat(prompt('Watches price'));
let earringsSum = earringsCount * parseFloat(prompt('Earrings price'));

const isEnough = totalCash >= (watchesSum + earringsSum);

document.body.innerHTML = isEnough;
