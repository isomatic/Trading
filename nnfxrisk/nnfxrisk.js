let account = document.querySelector('#account').value;
let atr = document.querySelector('#atr').value;
let price = document.querySelector('#price').value;
let risk = account * 0.02;
let stopPips = atr * 1.5;
let stopLoss = price - stopPips;
let pipValue = risk / stopPips;

let parameters = document.querySelector('#param');

document.addEventListener('keyup', calculate);

function calculate(){
    account = document.querySelector('#account').value;
    atr = document.querySelector('#atr').value;
    price = document.querySelector('#price').value;
    risk = account * 0.02;
    stopPips = atr * 1.5;
    stopLoss = price - stopPips;
    pipValue = risk / stopPips;
    console.clear();
    console.log("Stop Loss:" + stopLoss);
    console.log("Pip Value:" + pipValue);
    console.log("Account:" + account);
    console.log("Risk:" + risk);

    document.querySelector("#pipValue").innerHTML = 8;
}
