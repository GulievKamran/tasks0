const a=Number(prompt("your age"));
const b=Number(prompt("your height"));
if(isNaN(a) || isNaN(b)){
    alert("Please enter numeric values only")
const outcome= a*b;
document.getElementById("result").innerText(`${a}*${b}=${outcome}`);}