let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let calculateValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            calculateValue += buttonText;
            screen.value = calculateValue;
        }
        else if (buttonText == 'C') {
            calculateValue = "";
            screen.value = calculateValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(calculateValue);
        }
        else {
            calculateValue += buttonText;
            screen.value = calculateValue;
        }

    })
}
