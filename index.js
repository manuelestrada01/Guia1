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
    for (i=0; i<Numeros.length; i++)
    {let num = Numeros[i]*2
        NumDup.push(num)
    }
    
let dobles = Numeros.map(Element => Element * 2)
    console.log(NumDup)


//2.C

let colores = ["rojo", "amarillo", "azul"]
let colores2 = ["violeta", "verde"]