// document.getElementById("deposit-btn").addEventListener('click',function(){

//     const currentDeposit = document.getElementById("current-deposit")
//     const currentText = currentDeposit.innerText;
//     const currentTextParse = parseFloat(currentText)
    
//     const depositInput = document.getElementById("deposit-input");
//     const depositValue = depositInput.value;
//     const depositValueParse = parseFloat(depositValue);

//     const totalDeposit = currentTextParse + depositValueParse;
//     currentDeposit.innerText = totalDeposit;
//     depositInput.value = ''

//     const currentBalance = document.getElementById("current-balance")
//     const currentBalanceText = currentBalance.innerText;
//     const currentBalanceParse = parseFloat(currentBalanceText);

//     const newBalance = currentBalanceParse + depositValueParse;
//     currentBalance.innerText = newBalance;
    

// })


// document.getElementById("withdraw-btn").addEventListener('click',function(){

//     const currentWithdraw = document.getElementById("current-withdraw")
//     const currentWithdrawText = currentWithdraw.innerText;
//     const currentWithdrawTextParse = parseFloat(currentWithdrawText)
    
//     const withdrawInput = document.getElementById("withdraw-input");
//     const withdrawValue = withdrawInput.value;
//     const withdrawValueParse = parseFloat(withdrawValue);

//     const totalWithdraw = currentWithdrawTextParse + withdrawValueParse;
//     currentWithdraw.innerText = totalWithdraw;
//     withdrawInput.value = ''


//     const currentBalance2 = document.getElementById("current-balance")
//     const currentBalanceText2 = currentBalance2.innerText;
//     const currentBalanceParse2 = parseFloat(currentBalanceText2);

//     const newBalance2 = currentBalanceParse2 - withdrawValueParse;
//     currentBalance2.innerText = newBalance2;


// })


function Value(amountInput){
 
    let getAmountInput = document.getElementById(amountInput);
    let amountInputValue = getAmountInput.value;
    let amountInputValueParse = parseFloat(amountInputValue);
    getAmountInput.value = "";
return amountInputValueParse;
  
}

function InnerText(addInput){
    let getAddInput = document.getElementById(addInput);
    let addInputInnerText = getAddInput.innerText;
    let addInputInnerTextParse = parseFloat(addInputInnerText)
    getAddInput.value = "";
  return addInputInnerTextParse;
}

function addWithInnerText(textId,elementValue){
let innerId = document.getElementById(textId);
innerId.innerText = elementValue;

}

document.getElementById("deposit-btn").addEventListener('click',function(){

    let element = Value("deposit-input")
    let inner = InnerText("current-deposit")
    let deposit = element + inner;
    addWithInnerText("current-deposit", deposit);
    let addBalance = InnerText("current-balance")
    let newBalance = element + addBalance;
    addWithInnerText("current-balance",newBalance)
})
document.getElementById("withdraw-btn").addEventListener('click',function(){
    
    let withdrawElement = Value("withdraw-input")
    let withdrawInner = InnerText("current-withdraw")
    let withdraw = withdrawElement + withdrawInner;
    addWithInnerText("current-withdraw", withdraw);
    let decreaseBalance = InnerText("current-balance")
    let newBalance2 = decreaseBalance - withdrawElement ;
    addWithInnerText("current-balance",newBalance2)
})