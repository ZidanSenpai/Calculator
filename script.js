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
let text = "";
function showText(x) {
    text += x;
    screenText.textContent = text;
}
function evaluate(a, b, c){
    if (c == "+") {
        return a+b;
    }
    if (c == "-") {
        return a-b;
    }
    if (c == "*") {
        return a*b;
    }
    if (c == "/") {
        return a/b;
    }
}
zero.addEventListener("click", ()=>{
    showText(0);
})
one.addEventListener("click", ()=>{
    showText(1);
})
two.addEventListener("click", ()=>{
    showText(2);
})
three.addEventListener("click", ()=>{
    showText(3);
})
four.addEventListener("click", ()=>{
    showText(4);
})
five.addEventListener("click", ()=>{
    showText(5);
})
six.addEventListener("click", ()=>{
    showText(6);
})
seven.addEventListener("click", ()=>{
    showText(7);
})
eight.addEventListener("click", ()=>{
    showText(8);
})
nine.addEventListener("click", ()=>{
    showText(9);
})
ac.addEventListener("click", ()=>{
    text = "";
    screenText.textContent = "";
})
del.addEventListener("click", ()=>{
    text = text.slice(0, -1);
    screenText.textContent = text;
})
plus.addEventListener("click", ()=>{
    c = "+";
    showText(c);
})
minus.addEventListener("click", ()=>{
    c = "-";
    showText(c);
})
multiply.addEventListener("click", ()=>{
    c = "*";
    showText(c);
})
divide.addEventListener("click", ()=>{
    c = "/";
    showText(c);
})
equals.addEventListener("click", () => {
    // For now: basic support for a single operation
    const operatorMatch = text.match(/[+\-*/]/);
    if (!operatorMatch) return;
    const operator = operatorMatch[0];
    const [a, b] = text.split(operator).map(Number);
    screenText.textContent = evaluate(a, b, operator);
    text = ""; // clear after evaluation
});
