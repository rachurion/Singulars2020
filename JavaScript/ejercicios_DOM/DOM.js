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
        result = "NaN";
        break;
      } else {
      result = first_value / second_value;
      break;
      }
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
  else if (!(value2) && value2 != 0) {
    value2 = buttonValue;
    screen.value = buttonValue;
    return [value1, value2, screen.value]
  } 
  else if (value2 || value2 == 0) {
    value2 += buttonValue;
    screen.value += buttonValue;
    return [value1, value2, screen.value]
  }
    
}

function calculatorOperator(operatorPrev, operator,value1,value2,screen){
  
  if (!(screen.value)){
    return [operator, value1, value2, ""];
  } 
  if (operator == "√") {
    screen.value = calculator(parseFloat(value1), "** -", 2);
  }
  if (value2 || value2 == 0) {
    value2 = screen.value;
    if (operatorPrev == "x") screen.value = calculator(parseFloat(value1), "*", parseFloat(value2));
    else if (operatorPrev == "^") screen.value = calculator(parseFloat(value1), "**", parseFloat(value2));
    //else if (operatorPrev == "√") screen.value = calculator(parseFloat(value1), "** -", parseFloat(value2));
    else screen.value = calculator(parseFloat(value1), operatorPrev, parseFloat(value2));
    value1 = screen.value;
    value2 = null;
  }
  operator = operator;
  value1 = screen.value;
  if (screen.value.charAt(length + 1) == "+" || screen.value.charAt(length + 1) == "-" || screen.value.charAt(length + 1) == "/" || screen.value.charAt(length + 1) == "x" || screen.value.charAt(length + 1) == "^" || screen.value.charAt(length + 1) == "√"){
    screen.value = screen.value.slice(0, -1) + operator;
  } else if (operator != "√") screen.value += `${operator}`;
  return [operator, value1, value2, screen.value];
}

function printShoppingList(list) {
  let stringList = "";
  if (list.C.length != 0) {
    stringList += "+Carniceria: \n"
    list.C.forEach(element => {
      stringList += (`\xa0\xa0\xa0\xa0-${element}\n`);
    });
  }
  if (list.F.length != 0) {
    stringList += "+Fruta y Verdura: \n"
    list.F.forEach(element => {
      stringList += (`\xa0\xa0\xa0\xa0-${element}\n`);
    });
  }
  if (list.P.length != 0) {
    stringList += "+Panaderia: \n"
    list.P.forEach(element => {
      stringList += (`\xa0\xa0\xa0\xa0-${element}\n`);
    });
  }
  if (list.O.length != 0) {
    stringList += "+Otros: \n"
    list.O.forEach(element => {
      stringList += (`\xa0\xa0\xa0\xa0-${element}\n`);
    });
  }

  return stringList;

}

function getSelected(name, finalString) {
  let radioGroup = document.querySelectorAll(`input[name=${name}]`);
  let selected;
  for(let option of radioGroup) {
    if (option.checked) {
      
      selected = option.nextSibling.nodeValue;
      break;
    }
  }
  finalString += `${selected}\n\n`;
  return finalString;

}

function showOne(toShow, group, toRemove) {
  for(let option of group) {
    if (option.classList.contains(toShow)){
      option.style.width = "250px";
      if(!(option.classList.contains(toRemove))) {
        option.classList.add(toRemove)

      } 
      continue;
    } else  {
      option.classList.remove(toRemove);
      setTimeout(() => option.style.width = "0px", 2000);
      setTimeout(() => option.style.display = "none", 5000);
    }
     
  }

}
