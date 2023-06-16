function countTo(){
    let from = 10;
    let to = 100;
    let step = to > from ? 1 : -1;
    let interval = 15;

    let from2 = 10;
    let to2 = 100;
    let step2 = to2 > from2 ? 1 : -1;

    let from3 = 10;
    let to3 = 100;
    let step3 = to3 > from3 ? 1 : -1;

    if(from == to){
        document.querySelector("#output1").textContent = from;
        return;
    }
    if(from2 == to2){
        document.querySelector("#output2").textContent = from2;
        return;
    }
    if(from3 == to3){
        document.querySelector("#output3").textContent = from3;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#output1").textContent = from;
        document.querySelector("#output2").textContent = from;
        document.querySelector("#output3").textContent = from;
        if(from == to){
            clearInterval(counter);
        }
    }, interval);

    let counter2 = setInterval(function(){
        from2 += step2;
        document.querySelector("#output2").textContent = from2;
        if(from2 == to2){
            clearInterval(counter2);
        }
    }, interval);

    let counter3 = setInterval(function(){
        from3 += step3;
        document.querySelector("#output3").textContent = from3;
        if(from3 == to3){
            clearInterval(counter3);
        }
    }, interval);
}
countTo();