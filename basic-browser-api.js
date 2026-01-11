// ============alert============

console.log(window.alert); // function
alert(1); // 1

// ============prompt============

console.log(window.prompt); // function
const promptval = prompt('prompt msg');
console.log(promptval); // prompt

// ============confirm============

console.log(window.confirm); // function
const confirmval = confirm('confirm msg');
console.log(confirmval); // true/false
