function saludo(name = "usuario") {
  console.log(`Hola ${name}!`);
}

function calculator(first_value, operator, second_value) {
  console.log("entro en calcultor");
  let result;

  switch (operator) {
    case "+":
      result = first_value + second_value;
      break;
    case "-":
      result = first_value - second_value;
      break;
    case "*":
      result = first_value * second_value;
      break;
    case "/":
      if (second_value == 0) {
        console.log("dividir entre cero");
        result = "No se puede dividir entre cero";
        break;
      }
      result = first_value / second_value;
      break;
    case "%":
      result = first_value % second_value;
      break;
    case "**":
      result = first_value ** second_value;
      break;
    case "** -":
      result = first_value ** (1 / second_value);
      break;
    default:
      console.log("Error de simbolo");
  }

  return result
}

function calculatorButton(buttonValue, operator, value1, value2, screen) {
  if (!(operator)) {
    if (!(value1)) {
      value1 = buttonValue;
      screen.value = buttonValue;
      return [value1, value2, screen.value]
    } 
    else {
      value1 += buttonValue;
      screen.value += buttonValue;
      return [value1, value2, screen.value]
    }
  } 
  else if (!(value2)) {
    value2 = buttonValue;
    screen.value = buttonValue;
    return [value1, value2, screen.value]
  } 
  else if (value2) {
    value2 += buttonValue;
    screen.value += buttonValue;
    return [value1, value2, screen.value]
  }
    
}

function calculatorOperator(operatorPrev, operator,value1,value2,screen){
  if (!(screen.value)){
    return [operator, value1, value2, ""];
  } 
  if (value2) {
    value2 = screen.value;
    if (operatorPrev == "x") screen.value = calculator(parseFloat(value1), "*", parseFloat(value2));
    else if (operatorPrev == "^") screen.value = calculator(parseFloat(value1), "**", parseFloat(value2));
    else if (operatorPrev == "√") screen.value = calculator(parseFloat(value1), "** -", parseFloat(value2));
    else screen.value = calculator(parseFloat(value1), operatorPrev, parseFloat(value2));
    value1 = screen.value;
    value2 = null;
  }
  operator = operator;
  value1 = screen.value;
  if (screen.value.charAt(length + 1) == "+" || screen.value.charAt(length + 1) == "-" || screen.value.charAt(length + 1) == "/" || screen.value.charAt(length + 1) == "x" || screen.value.charAt(length + 1) == "^" || screen.value.charAt(length + 1) == "√"){
    screen.value = screen.value.slice(0, -1) + operator;
  } else screen.value += `${operator}`;
  return [operator, value1, value2, screen.value];
}

