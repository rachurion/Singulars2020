//* ------------------------------ Bucle for ------------------------------------

// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

console.log("-----Ejercicio 21-----");

for (let i = 0 ; i < 10; i++){
  if (i % 2 == 0) console.log("%c Este texto se escribe rojo", "color:red;");
  else console.log("%c Este texto se escribe azul", "color:blue;");
}


// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"

console.log("-----Ejercicio 22-----");

for (let i = 1 ; i <= 20; i++){
  if (i % 2 == 0) {
    if (i % 5 == 0) console.log(`${i} hola que tal?`);
    else console.log(`${i} hola`);
  } else if (i % 3 == 0){
    if (i % 5 == 0) console.log(`${i} adeu que tal?`);
    else  console.log(`${i} adeu`);
  } else if (i % 5 == 0) console.log(`${i} que tal?`);
}
// TODO el codi aquí


// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
// (fins a 1000 com a màxim)  PISTA: usa la paraula clau "break"

console.log("-----Ejercicio 23-----");

//llamada var max = prompt("Fins quin número vols contar (1-1000)?");

function contar(max) {
  for (let i = 0 ; i <= max; i++) {
    console.log(i);
    if (i == max) break;
  }
}
//llamada contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit


// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola

console.log("-----Ejercicio 24-----");

function buscadorPrimos(max) {
  let j;
  for (let i = 1 ; i <= max; i++) {
    for (j = 2 ; j <= i; j++) {
      if (i % j == 0) break;
    }
    if (j == i) console.log(`El número ${i} es un primo`);
  
  }

}

//llamada buscadorPrimos(10);


// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
// PISTA: usa la paraula clau "continue"

console.log("-----Ejercicio 25-----");

//llamada var digits = prompt("Quins digits vols mostrar (1-9)?");

function mostrarDigits(digits) {
  let str_number;
  let contained_in_digits = false;
  for (let i = 1; i <= 100; i++){
    str_number = i.toString();
    for (let j = 0; j < str_number.length ; j++) {
      if (digits.includes(str_number.charAt(j))) {
        contained_in_digits = true;
        break
      }
    }

    if (!(contained_in_digits)) continue ;

    console.log(i);
    contained_in_digits = false;
    
  }
}


//lamada mostrarDigits(digits);      // si dígits és 234, això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."



//* ----------------------------- Bucle while -----------------------------------

// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

console.log("-----Ejercicio 26-----");

function shoppingList(stopper) {
  let stopper_check = "";

  console.log("Llista de la compra:");

  while (stopper_check != stopper) {
    stopper_check = prompt(`¿Que item desea añadir a su lista de compra? Recuerde que para terminar debe introducir la palabra ${stopper}`);
    if (!(stopper_check == stopper)) console.log(`- ${stopper_check}`);
  }
  
}

//llamada shoppingList("stop");

//* ---------------------------- Mètodes arrays ---------------------------------

// exercici 27: dia de la setmana. A partir d'un array amb els dies de la setmana, pinta a la consola quin dia és avui

console.log("-----Ejercicio 27-----");

var dies = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]

var today = new Date()
today = today.getDay();

if (today == 0 ) console.log(`Hoy es ${dies[6]}`);
else console.log(`Hoy es ${dies[today - 1]}`);




// exercici 28: replicar split(). Defineix una funció que separi una cadena de caràcters amb el separador escollit

console.log("-----Ejercicio 28-----");

var cadena = "blaucacavermellcacagroccacamarrócacaverd"

const separar = (cadena, separator) => {
  let split_array = [];
  let separator_length = separator.length;
  let start_index = cadena.indexOf(separator);

  while (start_index != -1) {
    split_array.push(cadena.slice(0, start_index));
    cadena = cadena.substring(start_index + separator_length);
    start_index = cadena.indexOf(separator);
  }
  split_array.push(cadena);
  return split_array;
}

console.log(separar(cadena, "caca"));   // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 29: defineix una funció que agafi els elements d'un array i els mogui N elements cap a la dreta

console.log("-----Ejercicio 29-----");

var array = ["primer", "segon", "tercer", "quart", "cinquè"]

const moure = (source_array, offset) => {
  let offset_values = [];
  let moved_array = [];
  let counter = 0;

  while (counter != offset) {
    offset_values.unshift(source_array.pop());
    counter++
  }

  moved_array = offset_values.concat(source_array);
  return moved_array;

}

console.log(moure(array, 2));       // ha de mostrar ["quart", "cinquè", "primer", "segon", "tercer"]


// exercici 30: adapta l'exercici de la llista de la compra (ex. 26) perquè fiqui els elements en un array i
// els ordeni alfabèticament

console.log("-----Ejercicio 30-----");

function arrayShoppingList(stopper) {
  let stopper_check = "";
  let counter = 0;
  let shopping_list = [];
  console.log("Llista de la compra:");

  while (stopper_check != stopper) {
    stopper_check = prompt(`¿Que item desea añadir a su lista de compra? Recuerde que para terminar debe introducir la palabra ${stopper}`);
    if (!(stopper_check == stopper)) shopping_list.push(stopper_check);
    counter++;
  }
  shopping_list.sort();
  return shopping_list;
}

//llamada console.log(arrayShoppingList("stop"));


// exercici 31: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova
// si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins
// hi ha hagut coincidències d'aniversari

console.log("-----Ejercicio 31-----");

const birthdayParadox = (birthday_amount) => {
  let birthday_array = [];
  let counter = 0;
  let repeated_birthdays = [];
  let counter_array = [];
  while (counter != birthday_amount) {
    birthday_array.push(parseInt(Math.random() * 365) + 1);
    counter++
  }
  
  for(let i = 0; i < birthday_array.length; i++){
    counter = 0;
    for(let j = 0; j < birthday_array.length; j++){
      if (birthday_array[i] == birthday_array[j]) counter++
    }
    if (counter > 1 && !(repeated_birthdays.includes(birthday_array[i]))) {
      repeated_birthdays.push(birthday_array[i]);
      counter_array.push(counter);
    }
  }
  
  counter = 0;
  console.log(`En un array de ${birthday_amount} fechas de cumpleaños generadas aleatoriamiente vemos que: `)
  while (counter < repeated_birthdays.length) {
    console.log(`El dia de cumpleaños ${repeated_birthdays[counter]} se ha repetido ${counter_array[counter]} veces`);
    counter++
  }
}

birthdayParadox(50);

const birthdayParadoxSimple = (birthday_amount) => {
  let birthday_array = [];
  let counter = 0;
  let repeated_birthdays = [];
  let counter_array = [];
  while (counter != birthday_amount) {
    birthday_array.push(parseInt(Math.random() * 365) + 1);
    counter++
  }
  
  for(let i = 0; i < birthday_array.length; i++){
    counter = 0;
    for(let j = 0; j < birthday_array.length; j++){
      if (birthday_array[i] == birthday_array[j]) counter++
    }
    if (counter > 1 && !(repeated_birthdays.includes(birthday_array[i]))) {
      repeated_birthdays.push(birthday_array[i]);
      counter_array.push(counter);
    }
  }

  if (counter_array.length >= 1 ) return true;
  else return false;
}

function repeatedBirthdayProbability(birthday_amount, iterations) {
  let counter;
  let true_amount = 0;
  let true_percentage;

  for (counter = 1; counter <= iterations; counter++) {
    if (birthdayParadoxSimple(birthday_amount)) true_amount++;
  }

  true_percentage = (true_amount * 100) / iterations;
  console.log(`El procentaje de veces que se repite al menos un cumpleaños al randomizar ${birthday_amount} fechas ${iterations} veces es del ${true_percentage} por ciento`);

}

console.log ("PARADOJA CUMPLEAÑOS PORCENTAJE");
for (let i = 5; i < 51; i = i + 5) {
  repeatedBirthdayProbability(i,100);
}

//* ------------------------------ Objectes -------------------------------------

// exercici 32: crea un objecte que tingui les propietats "nom", "any" i "edat" i un mètode calcularEdat()
// que calculi l'edat en funció de l'any de neixement i la guardi a la propietat "edat"
//// PISTA: useu Date()

console.log("-----Ejercicio 32-----");

var persona = {  nom: "Maria",
                 any: 1994 , 
                 edat: 0,
                 calcularEdat: function() {
                   let current_year = new Date();
                   current_year = current_year.getFullYear();
                   this.edat = current_year - this.any;
                 }
}

persona.calcularEdat();

console.log(`${persona.nom} ha nacido en el año ${persona.any} y tiene ${persona.edat} años`);


// exercici 33: crea un objecte que contingui una paraula i el mètode separar() (de l'exercici 27) de tal manera
// que poguem usar-lo amb el codi següent

console.log("-----Ejercicio 33-----");

var frase = { string : "blaucacavermellcacagroccacamarrócacaverd",
              separar: function(separator) {
                let split_array = [];
                let cadena = this.string;
                let separator_length = separator.length;
                let start_index = cadena.indexOf(separator);

                while (start_index != -1) {
                  split_array.push(cadena.slice(0, start_index));
                  cadena = cadena.substring(start_index + separator_length);
                  start_index = cadena.indexOf(separator);
                }
                split_array.push(cadena);
                return split_array;
              }
}

var fraseSeparada = frase.separar("caca");

console.log(fraseSeparada);     // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 34: adapta l'exercici de la llista de la compra (ex. 26 i 30) perquè fiqui els elements en un objecte
// separats per seccions (carnisseria, fruita i verdura, làctics, forn de pa) i ordenats alfabèticament. El console.log
// haurà de mostrar els productes classificats per seccions:           Llista de la compra:
//                                                                        - Carnisseria
//                                                                             + Hamburguesa
//                                                                             + Bistec
//                                                                             + Mandonguilles
//                                                                        - Fruita i verdura
//                                                                             + Plàtans
//                                                                             + Síndria
//// PISTA: el prompt demanarà dues paraules: el producte i una lletra per classificar-los (p.e. "magdalenes F")

console.log("-----Ejercicio 34-----");

function objectShoppingList(stopper) {
  let item_promt = "";
  let stopper_check = "";
  let section = "";
  let shopping_list = { carniceria: [], fruta_verdura: [], lacteos: [], panaderia: []};
   

  while (stopper_check != stopper) {
    item_promt = prompt(`¿Que item desea añadir a su lista de compra? Introduzca el nombre del item, un espacio y la inicial de la categoria a la que lo desea añadir (C = Carniseria, F = Fruta y verdura, L = Lacetos y P = Panaderia). Recuerde que para terminar debe introducir la palabra ${stopper}`);
    item_promt = item_promt.split(" ");
    stopper_check = item_promt[0];
    if (!(stopper_check == stopper)) {
      section = item_promt[1].toUpperCase();
      switch (section) {
        case "C":
          shopping_list.carniceria.push(stopper_check);
          break;
        case "F":
          shopping_list.fruta_verdura.push(stopper_check);
          break;
        case "L":
          shopping_list.lacteos.push(stopper_check);
          break;
        case "P":
          shopping_list.panaderia.push(stopper_check);
          break;
        default:
          console.log("Ha introducido una inicial de categoría incorrecta por lo que no se ha podido añadir el item a la lista");
      }
    }
  }
  shopping_list.carniceria.sort();
  shopping_list.fruta_verdura.sort();
  shopping_list.lacteos.sort();
  shopping_list.panaderia.sort();
  return shopping_list;
}

function printShoppingList (shopping_list) {
  let counter = 0;
  console.log("Lista de la compra:");

  if (shopping_list.carniceria != []){
    console.log(" -Carniceria");
    while (counter < shopping_list.carniceria.length) {
      console.log(`   +${shopping_list.carniceria[counter]}`);
      counter++
    }
  }
  counter = 0;
  if (shopping_list.fruta_verdura != []){
    console.log(" -Fruta y Verdura");
    while (counter < shopping_list.fruta_verdura.length) {
      console.log(`   +${shopping_list.fruta_verdura[counter]}`);
      counter++
    }
  }
  counter = 0;
  if (shopping_list.lacteos != []){
    console.log(" -Lácteos");
    while (counter < shopping_list.lacteos.length) {
      console.log(`   +${shopping_list.lacteos[counter]}`);
      counter++
    }
  }
  counter = 0;
  if (shopping_list.panaderia != []){
    console.log(" -Panadería");
    while (counter < shopping_list.panaderia.length) {
      console.log(`   +${shopping_list.panaderia[counter]}`);
      counter++
    }
  }
}

//llamada var food_list = objectShoppingList("stop");
//llamada printShoppingList(food_list);


// exercici 35: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array
// d'objectes amb els noms de les columnes com a propietats
//// PISTA: necessitareu ajuda. Demaneu-la

console.log("-----Ejercicio 35-----");

var csv = `Year,Make,Model,Description,Price
           1997,Ford,E350,ac abs moon,3000.00
           1999,Chevy,Venture "Extended Edition",,4900.00
           1999,Chevy,Venture "Extended Edition XL",,5000.00
           1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`;

function csvManager(csv) {
  csv = csv.split("\n");
  let counter_csv = 1;
  let counter_array = 0;
  let first_line = csv[0].split(",");
  let array_object = [];
  let aux_object = {};
  let aux_array = [];
  let trim_year;

  while (counter_csv < csv.length) {
    aux_array = csv[counter_csv].split(",");

    while (counter_array < aux_array.length) {
      if (counter_array == 0) {
        trim_year = aux_array[counter_array].trim();
        aux_object[first_line[counter_array]] = trim_year;
      } else aux_object[first_line[counter_array]] = aux_array[counter_array];
      counter_array++;
      
    }
    counter_array = 0;
    array_object.push(Object.assign({}, aux_object));
    counter_csv++;
  }

  return array_object;
}

var cotxes = csvManager(csv);
console.log(cotxes);

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];



console.log("-------------------- FI DELS EXERCICIS --------------------");










