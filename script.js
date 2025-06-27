console.log("hello");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const equals = document.getElementById("equals");
const screenText = document.getElementById("screenText");

let a = 0;
let b = 0;
let c = "+";
function showText(x) {
    screenText.textContent += x;
}

zero.addEventListener("click", ()=>{
    a = 0;
    showText(0);
})
one.addEventListener("click", ()=>{
    a = 1;
    showText(1);
})
two.addEventListener("click", ()=>{
    a = 2;
    showText(2);
})
three.addEventListener("click", ()=>{
    a = 3;
    showText(3);
})
four.addEventListener("click", ()=>{
    a = 4;
    showText(4);
})
five.addEventListener("click", ()=>{
    a = 5;
    showText(5);
})
six.addEventListener("click", ()=>{
    a = 6;
    showText(6);
})
seven.addEventListener("click", ()=>{
    a = 7;
    showText(7);
})
eight.addEventListener("click", ()=>{
    a = 8;
    showText(8);
})
nine.addEventListener("click", ()=>{
    a = 9;
    showText(9);
})
ac.addEventListener("click", ()=>{
    screenText.textContent = "";
})
del.addEventListener("click", ()=>{
    screenText.textContent.slice(0,-1);
})