let displayValue  = document.getElementById('displayText');
const buttons = document.querySelectorAll('button')

const specialChacarters = [ '+' , '/' , 'x' ,'-']
let output = "";

const isDecimal = (number) => {
    return number % 1 !== 0;
}

function removeTrailingZeros(inputString) {

    return inputString.replace(/\.?0+$/, '');
  }


const calc = (btnVal) => {
displayValue.focus();
if(btnVal === "x")
{
    btnVal = '*';
}
try {
    if(btnVal === "=" && output !=="")
{
    output = eval(output);
    output = Number(output);
    output = isDecimal(output) ? Number(output).toFixed(3) : output;
    output = removeTrailingZeros(output.toString())

}
else if( btnVal === "DEL")
{
    output = output.toString().slice(0, -1);
}
else if(btnVal === "RESET")
{
    output = "";
}
else
{
    if (output === "" && btnVal === "-") {
        output = "-";
        displayValue.value = output;
        return;
    }

    
    if((output === "" && specialChacarters.includes(btnVal)) ) 
    {
        return;
    }
    const lastCharacter = output.toString().slice(-1);
    if(specialChacarters.includes(lastCharacter) && specialChacarters.includes(btnVal))
    {
        return;
    }
 
    output = output + btnVal;
}
const displayedOutput = output.toString().replace('*', 'x');
displayValue.value = displayedOutput;
} catch (error) {
    if (error instanceof SyntaxError) {
        alert('Invalid input. Please check your expression.');
    } else {
        
        console.error(error);
    }
}

}


buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.textContent));
});
