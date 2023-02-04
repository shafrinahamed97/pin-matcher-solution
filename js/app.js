function getPin() {
    const pin = generatePin();
    pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 4 digit found', pin)
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;

}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})