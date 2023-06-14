/*
let appendVal;
let textD;

document.addEventListener('keydown',function (event){

    /!*console.log(event.key);
    console.log(event.code);*!/

    const conKeys = ["-", "+", "*", "/"];

    if (event.key >= "0" && event.key <= "9"){
        showKey(event.key);
    }

    if (conKeys.includes(event.key) ) {
        if (!/[+\-*\/=]$/.test(appendVal)){
            showKey(event.key);
        }
    }

    if (event.key==="Backspace"){
        removeLastDigit(appendVal);
    }
    if (event.key==="Escape"){
        appendVal="";
        textD.val(appendVal);
    }
    if (event.key==="Enter"){
        if (!/[+\-*\/=]$/.test(appendVal)){
            let results=eval(appendVal);
            console.log(results);
            textD.val(""+results);
        }
    }

});

$(`#calBody`).click(function (event){
    let target = event.target.closest("button");
    const conKeys = ["-", "+", "*", "/"];

    if (target.innerText >= "0" && target.innerText <= "9"){
        showKey(target.innerText);
    }

    if (conKeys.includes(target.innerText)){
        if (!/[+\-*\/=]$/.test(appendVal)){
            showKey(target.innerText);
        }
    }

    if (target.innerText==="C"){
        removeLastDigit(appendVal);
    }

    if (target.innerText==="AC"){
        appendVal="";
        textD.val(appendVal);
    }

    if (target.innerText==="="){
        if (!/[+\-*\/=]$/.test(appendVal)){
            let results=eval(appendVal);
            console.log(results);
            textD.val(""+results);
        }

    }

})


function showKey(key) {
    textD = $(`#textD`);
    let currentVal=textD.val();
    appendVal=currentVal+""+key;

    textD.val(appendVal);
}

function removeLastDigit(currentVal){

    let lastChar = currentVal.charAt(currentVal.length - 1);
    const conKeys = ["-", "+", "*", "/","="];

    if (conKeys.includes(lastChar)){
        console.log(lastChar);
    }

    let newVal = currentVal.substring(0, currentVal.length - 1);
    appendVal=newVal
    textD.val(appendVal);
}*/
