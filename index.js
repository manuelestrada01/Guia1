let edad = 23;
const nombre = "Manuel";
/* En la variable "let" es posible reasignar valores por el hecho de que es una variable dinamica.
Por el el otro lado la variable "const" se le asigna un valor inicial pero al no ser dinamica se ve imposible cambiar su valor*/

let edadBucle = 0;
for (i=0; i<edad + 1; i++)
    {edadBucle = i}

console.log(edadBucle)

/* si la variable fuera const no incrementaria*/

let Persona = {
    edad:23,
    nombre:"manuel",
}

Persona.edad = 20
Persona.nombre = "Juan"

console.log(Persona.edad)
console.log(Persona.nombre)


//1.2

let frutas = ["uva", "manzana", "pera", "naranja", "frutilla"]
    frutas.unshift("mora");
    frutas.push("frambuesa")
    console.log(frutas)

let Numeros = [1,2,3,4,5]
let NumDup = []
    for (i=1; i<Numeros.length + 1; i++)
    {let num = i*2
        NumDup.push(num)
    }
    
let dobles = Numeros.map(Element => Element * 2)
    console.log(NumDup)


//2.C

let colores = ["rojo", "amarillo", "azul"]
let colores2 = ["violeta", "verde"]

let todos = colores.concat(colores2)
console.log(todos)

//1

let Libro = {
    titulo: "mi libro luna de pluton",
    autor: "Juan :D",
    ano: 2020
}

console.log(Libro)
console.table(Libro)

//1.B

Persona.hobby = "airsoft"
Persona.edad = 27
console.log(Persona)

//1.C

let Calculadora = {
    suma: function (x,y){
        return x + y
    },

    resta: function(x,y){
        return x - y
    },

    multi: function(x,y){
        return x * y
    },

    divi: function(x,y){
        return x / y
    }
}

//2.A
Persona.profesion = "ser malo"
let Temp = `nombre: ${Persona.nombre} edad: ${Persona.edad} prof: ${Persona.profesion}`
console.log(Temp)

//2.B
let Producto = {
    precio: 400,
    nombrePro: "Iphone"
}
function frase (nombrePro, precio){
   return `producto: ${nombrePro} precio: ${precio}`
}
console.log(frase(Producto.nombrePro, Producto.precio))

//2.C

let ERROR = {
    nombre: "caca",
    desc: "mucho texto"
}
console.log(`Nombre Error: ${ERROR.nombre}, desc: ${ERROR.desc}`)