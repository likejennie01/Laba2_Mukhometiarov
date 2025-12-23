const resElem = document.getElementById('res');
const firstn = document.getElementById('fn');
const secondn = document.getElementById('sn');

const firstValue = Number( firstn.value);
const secondValue = Number (secondn.value);
resElem.textContent = firstValue + secondValue;
