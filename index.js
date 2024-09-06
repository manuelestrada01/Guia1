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
    console.log(dobles)


//2.C

let colores = ["rojo", "amarillo", "azul"]
let colores2 = ["violeta", "verde"]

let todos = colores.concat(colores2)
console.log(todos)

//1.A

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

//3.A
function saludar(nombre) {
    return "Hola, " + nombre + "!";
  }
  console.log(saludar)

const saludarArrow = (nombre) => "Hola, " + nombre + "!";
console.log(saludarArrow(nombre))

//3.B
const num = 4;
let cuadrado = (num) => num * num;
console.log(cuadrado(num))

//3.C
const val1 = 10
const val2 = 8

let mayor = (val1, val2) => val1 > val2 ? val1 : val2
console.log(mayor(val1, val2))

//4.A
let pares = Numeros.filter(num => num % 2 === 0)
console.log(pares)

//4.B
const estudiante = {
    nombre: "martin",
    calificacion: 6
}

const estudiante2 = {
    nombre: "alejandro",
    calificacion: 3
}
let listaEstudiantes = [estudiante, estudiante2]
let nuevoArray = listaEstudiantes.map(Element => Element.nombre)

console.log(nuevoArray)

//4.C
const total = Numeros.reduce((acumulador, valorActual) => acumulador + valorActual)
console.log(total)

//5.A
const sumarTodos = (...numeros) => {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
};
console.log(sumarTodos(2,6,4,6))

//5.C
let objeto1 ={
    nombre : "juan",
    edad : 25
    }
let objeto2 = {
        nombre : "nico",
        edad : 33
    }
const  juntarObjetos = function(...elem){
        return objetosJuntos = elem
    }






//GUIA ASINCRONISMO

//VIAJE
const preparativos = [
    {requisitos: "documentos al día", valor: true},
    {requisitos: "reservas de hotel", valor: false},
    {requisitos: "transporte confirmado", valor: true},
    {requisitos: "seguro de viaje", valor: true},
    {requisitos: "dinero", valor: false}
    ]

//2
function listoParaViajar(preparativos){

    let lis = preparativos.filter(requisitos => requisitos.valor === false)
    .map(preparativo => preparativo.requisitos)
    .join()
    return lis
}
console.log(listoParaViajar(preparativos))


//3
preparativos.push({requisitos: "vacunas necesarias", valor: true})



//4
let pos = preparativos.findIndex(preparativos => preparativos.requisitos === "seguro de viaje")
preparativos.splice(pos, 1)




//5
let req = preparativos.find(preparativos => preparativos.requisitos === "transporte confirmado")

if(req){
    req.valor = false
}

preparativos.forEach(preparativo => {
    console.log(preparativo);
});


//6
console.log(listoParaViajar(preparativos))


//7


async function listoHam() {
    try {
        let responseH = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/hamburguesa?mock_delay=8000") 
        let dataH = await responseH.json()
        

    
    } catch (error) {
        console.log("ERROR HAM")
    }
}


async function listoEns() {
    try {
        let repsoneE = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/ensalada?mock_delay=4000")
        let dataE = await responseE.json()

    } catch (error) {
        console.log("ERROR ENS")
    }
}


async function listoGas() {
    try {
        let responseG = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/bebida?mock_delay=2000")
        let dataG = await responseG.json()

    } catch (error) {
        console.log("ERROR GAS")
    }
}


async function prepararComida() {
    try {
        const [hamburguesa, ensalada, bedida] = await Promise.all([listoHam(), listoEns(), listoGas()])
    console.log("Esta Listo")
    
    } catch (error) {
        console.log("ERROR General")
    }
    
}