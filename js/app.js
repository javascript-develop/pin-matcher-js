
function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}




function genaratePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin ;
    

})


// calculater type

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousNumbersField = typedNumbersField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumbersField.value = ''
        }
        else if(number === '<'){
            const digits = previousNumbersField.split('');
            digits.pop();
            const remaingDigits = digits.join('');
            typedNumbersField.value = remaingDigits;
        }
    }
    else{
        const newNumbersField = previousNumbersField + number;
        typedNumbersField.value = newNumbersField;
    }
})


// submit buttion


document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;


    const verifyPin = document.getElementById('typed-numbers');
    const currentTypedPin = verifyPin.value;

    const pinSuccessMesseage = document.getElementById('pin-success');
    const pinCancelMesseage = document.getElementById('pin-cancel');
    if(currentPin === currentTypedPin){
        pinSuccessMesseage.style.display = 'block';
        pinCancelMesseage.style.display = 'none'
    }
    else{
        pinCancelMesseage.style.display = 'block'
        pinSuccessMesseage.style.display = 'none';
    }

})