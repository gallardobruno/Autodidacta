//creando variables, un espacio guardado en memoria, la variable es el espacio, tiene su nombre y guarda un dato, texto, num, boleano,etc

var variable1 = "dato";
var variable2 = 19;
var variable8 = 15;
var variable3 = true;
var variable4 = false;
//variable undefined, existe en el programa pero no tiene valor(no se inicializo) no esta definido, temporalmente sin valor
var variable5 = undefined;
//variable null, su valor va a ser nada, vacio, se declara que esta vacio, siempre
var variable6 = null;
//Not a number, valor que obtenemos cuando la operacion esta mal, o se debera hacer con numeros, no se puede calcular (no se puede multiplicar texto)
//var variable7 = Nan;

//una variable se puede declarar, se puede inicializar o se puede modificar a lo largo del tiempo

//1) declararla... var, let, const... primero var, la global vale para TODO
var dato;


//las variables constantes no puede cambiar su valor, se definen una vez y ya esta
const persona1 = "Fernando";
//no puedo cambiarle el nombre, (el nombre se cambia tan solo invocando el nombre de la variable y asignando uno nuevo)
//en sintesis, const se usa cuando sabes que ese valor no va a cambiar NUNCA

//ahora declaramos e inicializamos la variable let, esta variable tiene menos peso que var, depende de su SCOPE, osea dentro de su bloque, let es la reina, por fuera no
//en caso de invocarla o cambiar nombre, tenemos q tener en cuenta cual es su scope

let persona2 = "lucia";

//DECLARAR una variable significa que le voy a definir su alcance, con var, global, let regional o const, unica e inmodificable, no hace falta darle valor
//para INICIALIZARLA necesariamente le tengo que dar su valor
//para MODIFICAR, se invoca la variable por su nombre, y cambiamos el valor

persona2= "victoria";
//ahora se cambio su nombre por victoria

//MULTIPLES VARIABLES
let persona3, persona4, persona5;

persona3 = "roberto";
persona4 = " pedro";
persona5 = "maria";

let accion = "almuerza", accion2 = " juega futbol", accion3 = "trabajando", accion4 = "grabando un video";

//HOISTING
//como funciona cada cosa, como se crea codigo y como se ejecuta, en que orden ?

//PRUEBAS CON PROMPT
//let nombre = prompt("como es tu nombre?");
//alert("hola " + nombre +" !");

//OPERADORES

//de ASIGNACION, como se puede modificar el valor de la variable? por medio de estos operadores (+ - /,etc) var valor = 5... valor += 5; sumamos 5+5
//valor *= 2.... 10
//valor /= 2..... 2,5
//valor %= 2..... 1 (dividimos 5 por 2 y el resto que queda es el resultado)
//valor **= 2.... 25 (elevado a 2) 
//otras asignaciones... de desplazamiento, AND XOR OR

//ARITMETICOS, toma numero de una o mas variables y las modifica por otro valor unico, otra variable nueva
// var numero1 =10;
//var numero2 = 5;
//resultado= numero1 + numero2 (lo mismo con / * - ** % )
//resultado= 15
//numero1--;
//resultado= numero1;
//resultado = 9
//resultado = numero1**2
//resultado = 100
//numero1++;
//resultado = numero1;
//resultado = 11
//resultado = -numero1
//resultado = -10

//CONCATENACION
//unir strings, como ? con + 

var frase = persona3 + " " + accion;
//var frase = roberto almuerza
document.write(frase);

var frase2 = persona4.concat(accion2);
document.write(frase2);

//como obligar a concatenar numeros sin ue se sumen ?
var stingsNumber = " " + variable2 + variable8;
document.write(stingsNumber);

//concatenar con ${} y bad tics

// var frase3 = `mientras que ${persona5}
//  esta ${accion3}`;

// document.write(frase3);
//gracias a las bad tics tambien podremos poner dentro de ellas codigo html `<h1>hola<h1>`

//para cerrar, si en la oracion queremos agregar comillas dobles en la oracion o string, debemos poner comillas simples por fuera, o viceversa

//OPERADORES DE COMPARACION, devuelven un valor booleano en cada comparacion
//let numero = 23;
//let numero2 = 34;
//document.write(numero == numero2) son iguales?
//false
//document.write(numero != numero2) son distintos?
//true
//document.write(numero === numero2) son estrictamente iguales? mismo dato, mismo valor
//false
//document.write(numero < numero2) mayor, menor o mayor e igual?
//true

//OPERADORES LOGICOS, se cumple o no la funcion, resultado booleano
//let valor = 1;
//let valor1 = 0;

//let resultado = valor && valor1; and... false
//let resultado = valor || valor1; or.... true
//let resultado = !valor1; not........    true

//CONDICIONALES, un {bloque} se ejecuta, y el condicional hace que un bloque se ejecute solo si una condicion se cumple
//persona5 = "bruno";

if (10 > 15) {
    var frase3 = `mientras que ${persona5}
esta ${accion3}`;

document.write(frase3); 
}

//como hago para que me muestre otra cosa en caso que no se cumpla la condicion ? con ELSE IF (se pueden poner los else if que quisieramos)

else if (persona5 == "maria") {
    var frase4 = `mientras que ${persona5}
    esta ${accion4}`;
    
    document.write(frase4); 
}

//si nada de lo anterior se cumple, hacemos otra cosa (en caso de tener 10 else if y ninguno cumple la condicion), ELSE solo
//if es uno solo, else if lo que querramos y else solo uno

else {  
    var frase5 = " volver a escribir "

document.write(frase5); 
}












