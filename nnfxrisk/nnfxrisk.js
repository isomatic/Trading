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
    baseline = document.querySelector('#baseline').value;
    risk = Math.round(account * 0.02);
    stopPips = atr * 1.5;
    stopLoss = price - stopPips;
    pipValue = risk / stopPips;
    console.clear();
    console.log("Stop Loss: " + stopLoss / 10000);
    console.log("Pip Value: " + pipValue);
    console.log("Account: " + account);
    console.log("Risk: " + risk);
    console.log("Price - Baseline: " + (price - baseline));
    console.log("ATR: " + atr)
    console.log("Too Far: " + isTooFar(price, baseline, atr));

    document.querySelector("#pipValue").innerHTML = pipValue;
}

function isTooFar(price, baseline, atr) {
    return Math.abs(price - baseline) > atr;
}


// TODO: Allow only numerical input
// MT4 indicator quickly highlighting if price is too far from baseline
