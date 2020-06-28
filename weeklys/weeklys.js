var ticker = document.querySelector("#ticker");
var screen = document.querySelector(".container");
ticker.onkeyup = function(){
    if(hasWeeklys(ticker.value.toUpperCase().trim())) {
        screen.classList.remove("noWeeklys");
        screen.classList.add("hasWeeklys");
    }
    else if(!ticker.value || !ticker.value.trim()){
        screen.classList.remove("hasWeeklys");
        screen.classList.remove("noWeeklys");
    }
    else {
        screen.classList.remove("hasWeeklys");
        screen.classList.add("noWeeklys");
    };
    
    ticker.focus();
}

function hasWeeklys(name){
    return weeklys.includes(name);
}

function getChart(ticker) {
    return "https://charts.finviz.com/chart.ashx?t=" + ticker +
    "&ta=st_c,sch_,sma2_180,sma2_50,ema2_20,atr_b_14&p=d&s=m";
}