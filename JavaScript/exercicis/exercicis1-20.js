console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:")



//* ------------------------ Variables --------------------------



// exercici 1: intercanvi de variables

console.log("-----Ejercicio 1-----");

var primer, segon;

primer = 1;

segon = 2;

var tercer;

tercer = primer ;

primer = segon;

segon = tercer;

console.log(primer,segon);  // ha de mostrar 2 1



//* ------------------------- Funcions --------------------------

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

console.log("-----Ejercicio 2-----");

function psicologo() {
  console.log("¿Como estas?");
}

psicologo();


// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

console.log("-----Ejercicio 3-----");

function pregunta (item_question) {
  console.log (`¿Te gusta ${item_question}?`);
}

pregunta("la pizza");


// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

console.log("-----Ejercicio 4-----");

function pregunta2 (item_question) {
  return `Te gusta ${item_question}`;
}

console.log(`${pregunta2("la pizza")} con piña?`);


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

console.log("-----Ejercicio 5-----");

var m3 = 8;

function metresCubicsALitres(cubic_measurement) {
  return [cubic_measurement, cubic_measurement * 1000];
}

function mostrarSolució(answer) {
  console.log(`${answer[0]} metros cubicos son ${answer[1]} litros`)
}

mostrarSolució(metresCubicsALitres(m3));


// exercici 6: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

console.log("-----Ejercicio 6-----");

var diners = 0;

function  agregarDinero(money) {
  money += money;
}

function gastarDinero(money) {
  money -= money;
}
// TODO: definició de afegirDiners() i gastarDiners() 

agregarDinero(20);
gastarDinero(15);
agregarDinero(40);
gastarDinero(25);

console.log(diners); // això retornarà 20



//* ------------------------------ Condicionals --------------------------------

// exercici 7: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

console.log("-----Ejercicio 7-----");

var size = prompt("¿Que talla de camisa desea comprar? (Introduzca una opción entre S, M, L, XL)")  // TODO: editar el missatge del prompt()

// TODO: estructura condicional que digui per la consola la talla escollida
size_options = ["S", "M", "L", "XL"];

if (size) size = size && size.toUpperCase();

if (size_options.includes(size)) {
  console.log(`Ha seleccionado la talla ${size}`);
} else {
  console.log("La talla seleccionada no es valida");
}
// exercici 8: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

console.log("-----Ejercicio 8-----");

var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

function cercle (radius, mode = "P") {
  if (mode == "P") {
    console.log(`El perimetro de un circulo de radio ${radius} es ${2*radius*Math.PI}`)
  } else if (mode == "A") {
    console.log(`El área de un circulo de radio ${radius} es ${Math.PI*radius*radius}`)
  } else {
    console.log("El mode introducido no es valido")
  }
}

cercle(radi, mode);


// exercici 9: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

console.log("-----Ejercicio 9-----");

var side_length = 3;
var sides_number = 4;

function poligon(side_length, sides_number) {
  let grado = 360 / sides_number;
  grado = grado * Math.PI / 180;
  let apotema = side_length / (2 * Math.tan(grado / 2));
  let perimetro, area;

  perimetro = side_length * sides_number;
  area = (perimetro*apotema) / 2;
  area = area.toFixed(2);

  console.log (`El perimetro de un poligono regular de ${sides_number} lados donde cada lado mide ${side_length} es ${perimetro} y su area es ${area}`);
}

poligon(side_length, sides_number);


// exercici 10: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

console.log("-----Ejercicio 10-----");

// defino funcion dataCorrector que usare para poder verificar si lo que el usuario introduce en el promt es correcto y en caso de no serlo da i intentos de acomodarlo.
// Se le debe dar el valor user_value (introducido en promt, un array correct_values al que user_value deberia pertecener, el numero de intentos  y finalmente un valor booleano
// is_lowercase para determinar si se debe transformar n a lower case o upper case. Por defecto c es true que transforma a lower case.
// la funcion devuelve n que puede ser o no modificado.

function dataCorrector(user_value, correct_values, max_tries, is_lowercase = true) { 
  let wrong_tries = 0;

  while (!(correct_values.includes(user_value) && wrong_tries < max_tries)) {
    if (correct_values.includes(user_value)) {
      break;
    } else {
      wrong_tries++
      user_value = prompt(`El valor ${user_value} no es un valor correcto (intento fallido ${wrong_tries}/${max_tries}), por favor elija un valor entre ${correct_values}`);
      if (is_lowercase){
       if (user_value) user_value = user_value.toLowerCase();
      } else{
        if (user_value) user_value = user_value.toUpperCase();
      }
    }
  }

  if (wrong_tries == max_tries) console.log("Ha superado el máximo número de intentos erroneos") ;

  return user_value;
}

function botiga() {
  let size_options = ["S", "M", "L", "XL"];
  let item_options = ["camisa", "pantalon", "sombrero"]
  let type_options = ["copa", "pirata", "gorra", "lana"]

  let item = prompt("Elija uno de los siguientes items: camisa, pantalon, sombrero")
  if (item) item = item.toLowerCase();

  item = dataCorrector(item,item_options,5);
  if (!(item_options.includes(item))) return "Entrada de datos incorrecta";

  let size = prompt(`¿Que talla de ${item} desea comprar? (Introduzca una opción entre S, M, L, XL)`);
  if (size) size = size.toUpperCase();

  size = dataCorrector(size,size_options,5,false);
  if (!(size_options.includes(size))) return "Entrada de datos incorrecta";

  if (item == "sombrero") {
    let type = prompt("¿Que tipo de sombrero desea comprar? Elija entre: copa, pirata, gorra, lana");
   if (type) type = type.toLowerCase();
    
    type = dataCorrector(type,type_options,5);
    if (!(type_options.includes(type))) return "Entrada de datos incorrecta";

    return `Ha pedido un ${item} de ${type} (talla ${size})` ;
  } else if (item == "pantalon" || item == "camisa") {
    color = prompt(`¿Que color de ${item} desea?`)
    return `Ha pedido un ${item} de color ${color} (talla ${size})` ;
  }
}

//llamada var carrito = botiga();

//llamada console.log(carrito);  // això tornarà "Has demanat un barret de pirata (talla L)"

//* ---------------------------- Mètodes numbers -------------------------------

// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, potència, arrels quadrades i qúbiques)

console.log("-----Ejercicio 11-----");

function calculadora() {

  let result,second_value;
  let first_value = prompt("Intrduzca el primer número a calcular");
  first_value = parseFloat(first_value);
  let operator = prompt(`Introduzca la operación que desea realizar. Para calcular una raiz diga "raiz"`);

  if (operator == "raiz") {
    second_value = prompt("Introduzca 2 si desea una raiz cuadrada y 3 si desea una raiz cubica");
    second_value = parseInt(first_value);
    result = first_value ** (1/second_value);
    result = result.toFixed(2);
    if (second_value == 2) console.log(`La raiz cuadrada de ${first_value} es igual a ${result}`);
    else if (second_value == 3) console.log(`La raiz cúbica de ${first_value} es igual a ${result}`);
    else console.log("Valor incorrecto. Debe introducir 2 para raiz cuadrada o 3 para raiz cubica.")
  } else {
    second_value = prompt("Introduzca el segundo número a calcular");
    second_value = parseFloat(second_value);

    switch (operator) {
      case "+":
        result = first_value + second_value;
        console.log(`La suma de ${first_value} mas ${second_value} es igual a ${result}`);
        break;
      case "-":
        result = first_value - second_value;
        console.log(`La resta de ${first_value} menos ${second_value} es igual a ${result}`);
        break;
      case "*":
        result = first_value * second_value;
        console.log(`La multiplicacíon de ${first_value} por ${second_value} es igual a ${result}`);
        break;
      case "/":
        if (second_value != 0) {
          result = first_value / second_value;
          console.log(`La division de ${first_value} entre ${second_value} es igual a ${result}`);
          break;
        } else console.log("No se puede dividir entre cero");
      case "**":
        result = first_value ** second_value;
        console.log(`El resultado de ${first_value} elevado a la ${second_value} es igual a ${result}`);
        break;
      case "%":
        result = first_value % second_value;
        console.log(`El resto de la division de ${first_value} entre ${second_value} es igual a ${result}`);
        break;
      default:
        console.log("El simbolo introducido no es correcto");
    }
  }

}

//llamada calculadora();


// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle

console.log("-----Ejercicio 12-----");

function triangleRectangle(first_side, second_side, third_side) {
  if ( first_side > second_side && first_side > third_side) return ((second_side ** 2) + (third_side ** 2) == first_side ** 2);
  else if ( second_side > first_side && second_side > third_side) return ((first_side ** 2) + (third_side ** 2) == second_side ** 2);
  else if ( third_side > first_side && third_side > second_side) return ((first_side ** 2) + (second_side ** 2) == third_side ** 2);
  else return false;

}

var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c1 = 4;
c2 = 5;
c3 = 6;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar false

// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle

console.log("-----Ejercicio 13-----");

c1 = 30;
c2 = 40;

function calculaHipotenusa(first_side,second_side) {
  return ((first_side ** 2) + (second_side ** 2)) ** (1/2)
}

function calculaAngles(first_side,second_side) {
  let hipotenuse = calculaHipotenusa(first_side,second_side);
  let first_angle = Math.acos(first_side/hipotenuse);
  first_angle = first_angle * (180 / Math.PI);
  first_angle = parseFloat(first_angle.toFixed(2));
  let second_angle = 90 - first_angle;

  return [first_angle, second_angle];

}


console.log(calculaHipotenusa(c1,c2));  // ha de donar 50

console.log(`Los angulos del triangulo son ${calculaAngles(c1,c2)[0]} y ${calculaAngles(c1,c2)[1]}`);      // ha de donar 30º i 60º



//* ---------------------------- Mètodes strings -------------------------------

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

console.log("-----Ejercicio 14-----");;

function convertirEnEnter(str) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = "";
  let length = str.length;
  let counter = 0;

  while (counter < length) {
    if (numbers.includes(str.charAt(counter))) {
      result = result + str.charAt(counter);
      break;
    }
    counter++;
  }

  if (result == "") return "NaN";
  counter++;
  while (counter < length) {
    if (numbers.includes(str.charAt(counter))) {
      result = result + str.charAt(counter);
    } else break;
    counter++;
  }
  result = result ** 1;
  return result;

}

console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

console.log("-----Ejercicio 15-----");

function convertirEnDecimal(str) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let separators = [",", ", ", ".", "'"]
  let result = "";
  let length = str.length;
  let str_counter = 0;
  let separator_counter = 0;

  while (str_counter < length) {
    if (numbers.includes(str.charAt(str_counter))) {
      result = result + str.charAt(str_counter);
      break;
    }
    str_counter++;
  }

  if (result == "") return "NaN";
  str_counter++;

  while (str_counter < length) {
    if (numbers.includes(str.charAt(str_counter))) {
      result = result + str.charAt(str_counter);
    }
    else if (separator_counter == 0 && separators.includes(str.charAt(str_counter))){
      result = result + str.charAt(str_counter);
      separator_counter++;  
    }
    else break;
    str_counter++;
  }
  result = result.replace("'","." )
  result = result.replace(",","." )
  result = result.replace(", ","." )
  result = result ** 1;
  return result;
}

console.log(convertirEnDecimal(`hola89'234`));     // ha de tornar 89.234
console.log(convertirEnDecimal(`43'35adeu`));      // ha de tornar 43.35
console.log(convertirEnDecimal(`amor45.9odi`));    // ha de tornar 45.9


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

console.log("-----Ejercicio 16-----");

function valorAbsolut(number) {
  //if (number < 0) number = number - (2*number);
  number = number.toString();
  if (number.charAt(0) == "-") number = number.substring(1);
  return number;
}

console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
console.log(valorAbsolut(0));            // ha de tornar 0
console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678


// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

console.log("-----Ejercicio 17-----");

var lletres = "abc def";

function lletraRandom(str) {
  let aux_str = str;
  let result = "";
  let random_number;

  while (result == "") {
    random_number = parseInt(Math.random()*(aux_str.length - 1));
    if (aux_str.charAt(random_number).toLowerCase() == aux_str.charAt(random_number).toUpperCase()){
      aux_str = aux_str.substring(0,random_number) + aux_str.substring(random_number + 1, aux_str.length );
    }
    else {
      result = result + aux_str.charAt(random_number);
    }

  }

  return result;
}

console.log(lletraRandom(lletres));     // torna una lletra entre la a i la f


// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

console.log("-----Ejercicio 18-----");

function separarParaules(unseparated_text) {

  if (unseparated_text.charAt(0) == " ")  unseparated_text = unseparated_text.substring(1,unseparated_text.length);
  let counter = 0;

  while (counter < unseparated_text.length) {
    if ((unseparated_text.charAt(counter) == " ") && (unseparated_text.charAt(counter-1) == " ")){
      unseparated_text = unseparated_text.substring(0,counter) + unseparated_text.substring(counter+1,unseparated_text.length);
    } else if (unseparated_text.charAt(counter).toLowerCase() == unseparated_text.charAt(counter).toUpperCase() && unseparated_text.charAt(counter) != " ") {
      unseparated_text = unseparated_text.substring(0,counter) + unseparated_text.substring(counter+1,unseparated_text.length);
    }
    else counter++;  
  }

  if (unseparated_text.charAt(unseparated_text.length-1) == " ") unseparated_text = unseparated_text.substring(0,unseparated_text.length-1);
  
  return unseparated_text;

}

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata "

var paraules = separarParaules(text);

console.log(paraules);


// exercici 19: crea una funció que agafi un str i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log("-----Ejercicio 19-----");

function paraulaRandom(str) {
  str = separarParaules(str);
  if (str == "") return "La string no puede ser vacia o tener solo espacios";
  let word_number = 0; //numero de palabras donde la primera palabra es el 0.
  let counter = 0;
  let random_number, secondary_counter;
  

  while (counter < str.length) {  //calculo el numero de palabras fijandome en la cantidad de espacios que hay.
    if (str.charAt(counter) == " ") word_number++;
    counter++
  }
  
  random_number =  parseInt(Math.random()*(word_number+1)); // numero aleatorio del 0 al numero de palabras

  counter = 0;
  secondary_counter = 0;

  if (random_number == 0) {    //caso frontera de la primera palabra
    while (str.charAt(counter) != " ") counter++;
    return str.substring(0,counter);
  } else { 
    while (counter < str.length && secondary_counter != random_number) { //busca el espacio antes de la palabra aleatoriamente elegida
      if (str.charAt(counter) == " ") secondary_counter++;
      counter++;
    }

    secondary_counter = counter;
    counter++;
    
    if ( random_number == word_number) return (str.substring(secondary_counter,str.length)); // caso frontera de la ultima palabra
    while (str.charAt(counter) != " "){
      counter++; //busca el espacio despues de la palabra aleatoriamente elegida
    } 
    return str.substring(secondary_counter ,counter);
  }
}

console.log(paraulaRandom(text));

// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

console.log("-----Ejercicio 20-----");

// TODO deifineix la funció horoscop()

function checkDate(birth_date) {
  if (birth_date.length != 5) return false;
  else if (birth_date.charAt(2) != "/") return false;
  else {
    let day = parseInt(birth_date.substring(0,2));
    let month =  parseInt(birth_date.substring(3,5));
    let months_30 = [4, 6, 8, 11];
    if ((month < 1) || (month > 12) || (day < 1) || (day > 31)) return false;
    else if ((month == 2) && (day > 29)) return false;
    else if ((months_30.includes(month)) && (day > 30)) return false;
    else return true;
  }
}

function horoscopo() {
  let birth_date = prompt("Introduzca su fecha de nacimiento haciendo uso del formato DD/MM" );
  if (!(checkDate(birth_date))) return "Fecha incorrecta, recuerde usar el formato DD/MM separando siempre con un /";

  let sign_option = [[20, "Capricornio", "Acuario"], [18, "Acuario", "Picis"], [20, "Piscis", "Aries"], [20, "Aries", "Tauro"], [20, "Tauro", "Geminis"], [21, "Géminis", "Cáncer"], [22, "Cáncer, Leo"], [22, "Leo", "Virgo"], [22, "Virgo", "Libra"], [22, "Libra", "Escorpio"], [22, "Escorpio", "Sagitario"], [21, "Sagitario", "Capricornio"]];
  let day = parseInt(birth_date.substring(0,2));
  let month =  parseInt(birth_date.substring(3,5));

  let sign;

  if ( day > sign_option[month-1][0]) sign = sign_option[month-1][2];
  else sign = sign_option[month-1][1];
  
  let predictions = ["Cuidado con los cuervos que si te ven te sacan los ojos", "La loteria te llama, ve a ella, no tengas miedo", "Te llamara tu ex a las 3 de la mañana una noche. Si contestas no garantizo tu bienestar emocional", "¿Te acuerdas como de peque todos te decian que siguieras tus sueños? No lo hagas hay que pagar el alquiler", "El amor de tu vida te espera en en el starbucks de plaza caaluña un jueves a las 3 de la tarde. Yo que tu iria cada jueves por que si te lo pierdes nunca se conoceran."]

  let random_number = parseInt(Math.random() * 4)
  return [sign, predictions[random_number]];
}

var prediction = horoscopo();
console.log(`Tu signo es ${prediction[0]} y te ofrezco la siguiente prediccion: ${prediction[1]}`);

// exercici 20.1: crea una funció que generi prediccions aleatòries

console.log("-----Ejercicio 20.1-----");

function prediccio() {
  let start = ["Mañana ", "El siguiente viernes ", "La semana que viene ", "Hoy ", "Cuando encuentres el amor "];
  let middle = ["te ira ", "te sentiras "];
  let end = ["bien.", "mal.", "de puta madre."];

  let random_array = [parseInt(Math.random() * 5), parseInt(Math.random() * 2), parseInt(Math.random() * 3)]; 
  console.log(start[random_array[0]] + middle[random_array[1]] + end[random_array[2]]);
}

prediccio();

// exercici 20.2: crea una funció que implementi l'horòscop xinès

console.log("-----Ejercicio 20.2-----");

function horoscopXines() {
  let chinese_signs = ["la Rata", "el Buey", "el Tigre", "el Conejo", "el Dragon", "la Serpiente", "el Caballo", "la Cabra", "el Mono", "el Gallo", "el Perro", "el Cerdo"];
  let year = prompt("Introduzca el año (No puede ser menor a 1900)");
  let index;
  if (year < 1900) return "Por favor introduzca un año superior a 1899";
  else if (year < 2000) {
    index = year - 1900;
    index = index % 12;
    return `El signo zodiacal chino del año ${year} es ${chinese_signs[index]}`;
  }
  else {
    index = year - 2000;
    index = index % 12;
    index = index + 5;
    if (index > 12) index = index - 12;
    index--;
    return `El signo zodiacal chino del año ${year} es ${chinese_signs[index]}`;
  }  
}

console.log(horoscopXines());