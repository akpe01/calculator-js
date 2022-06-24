let FirstNumber = parseFloat(prompt("Enter your first num:"));
let operator  = prompt("Enter an operation to be used from either of (+, -, /, *)");
let SecondNumber = parseFloat(prompt("Enter your second num:"));


let result = 0

if (isNaN(FirstNumber) || isNaN(SecondNumber)){
    alert("try again");
} else if(operator == "+"){
    result = FirstNumber + SecondNumber;
} else if (operator == "-") {
    result = FirstNumber - SecondNumber;
} else if (operator == "*") {
    result = FirstNumber * SecondNumber;
} else if (operator == "/") {
    result = FirstNumber / SecondNumber;
}

alert(FirstNumber + operator + SecondNumber + "=" + result);