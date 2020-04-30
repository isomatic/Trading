var ticker = document.querySelector("#ticker");

ticker.onkeyup = function(){
    if(hasWeeklys(ticker.value.toUpperCase().trim())) {
        document.body.classList.remove("noWeeklys");
        document.body.classList.add("hasWeeklys");
    }
    else if(!ticker.value || !ticker.value.trim()){
        document.body.classList.remove("hasWeeklys");
        document.body.classList.remove("noWeeklys");
    }
    else {
        document.body.classList.remove("hasWeeklys");
        document.body.classList.add("noWeeklys");
    };
    
    ticker.focus();
}

function hasWeeklys(name){
    return weeklys.includes(name);
}