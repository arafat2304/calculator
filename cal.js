const currDisplay =document.querySelector(".curr-display");
const preDisplay=document.querySelector(".pre-display");
const numbers=document.querySelectorAll(".number");
const operands=document.querySelectorAll(".operation");
const clearBtn=document.querySelector(".clear");
const equalBtn=document.querySelector(".equal");
const delBtn=document.querySelector(".delete");

let operation;

numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        appendNumber(number);
    })
})

function appendNumber(number){
    let a=currDisplay.innerText.indexOf(operation);
    if(a<0){
    currDisplay.innerText += number.innerText;
    }else{
        preDisplay.innerText +=currDisplay.innerText;
        currDisplay.innerText="";
        currDisplay.innerText=number.innerText;
    }
}

operands.forEach((operand)=>{
    operand.addEventListener("click",()=>{
        operation=operand.innerText
        currDisplay.innerText +=operand.innerText;
    })
})

equalBtn.addEventListener("click",()=>{
    
cal();    

})

function cal(){
    let c=parseFloat(currDisplay.innerText);
    let d=parseFloat(preDisplay.innerText);

    switch(operation){
        case "+":
            currDisplay.innerText= c + d;
            break;
        case "-":
            currDisplay.innerText= c - d;
            break;
        case "*":
            currDisplay.innerText= c * d;
            break;
        case "/":
            currDisplay.innerText= d / c;
            break;
        default:
            return;
    }

    preDisplay.innerText="";
}

clearBtn.addEventListener("click",()=>{
    currDisplay.innerText="";
    preDisplay.innerText="";
})

delBtn.addEventListener("click",()=>{
    currDisplay.innerText=currDisplay.innerText.slice(0,-1);
})