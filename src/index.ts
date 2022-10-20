//Esto es un comentario en TS
import {deleteAllCookies, deleteCookie, getCookieValue, setCookie} from "cookies-utils";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { iTarea, Nivel } from "./models/interfaces/iTarea";
import { Trabajador, Jefe } from "./models/Persona";
import { Programar } from "./models/Programar";


/**
 * Esto es un comentario
 * Multilínea
 */

console.log("Hola Angie")
console.log("Adiós Angie")

//VALORES PRIMITIVOS TS: number, string, boolean, void, null, undefined

//Declaración de variables:
var nombre: string = "Angie" //Tipado estático-fuerte
let email: "angie@gmail.com" //Tipado estático-inferido
const PI: number = 3.1416 //Tipado estático-fuerte
var apellido: any = "Moreno" //Tipo any permite que la variable cambie de tipo de dato
var errores; errores = false // Infiere un tipo any porque no tiene un tipo definido -implícita o explícitamente- en la declaración de la variable
var error: boolean; error = false

console.log("Hola, " + nombre)
console.log(`¿Qué tal, ${nombre}?`)
console.log(`¿Hay error?: ${error}`)


//Instanciación múltiple de variables:
let a:string , b:boolean , c:number; //Instancia 3 variables sin valor inicial
a= "Typescript";
b= true;
c= 8.9;


//TIPOS DE VALORES MÁS COMPLEJOS

//Array de strings
let listaTareas: string[] = ["Tarea1", "Tarea2", "Tarea3"]

//Array con tipos de datos combinados
let valores: (string | number | boolean)[] = [false, "Hola", true, 56]

//Enum
enum Estados{
    "Completado"="C",
    "Incompleto"="I",
    "Pendiente"="P"
}

enum PuestoCarrera{
    "Primero"=1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Tercero;

//Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

let tarea1: Tarea = {
    nombre:"Tarea1",
    estado:Estados.Pendiente,
    urgencia:5
}

console.log(`Tarea: ${tarea1.nombre}`)
//let {nombre, estado, urgencia} = tarea1

//Types

type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}


//** Condicionales*/ 
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);

//if - else
if(error){
    console.log(`Hay un error`);
} else{
    console.log(`No hay un error`);
}

//if - else if - else
if(coche.anio < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`)

} else if(coche.anio === 2010){
    console.log(`Coche: ${coche.nombre} es del 2010`)

} else{
    console.log(`Coche: ${coche.nombre} es nuevo`)
}


//Switch
switch(tarea1.estado){
    case Estados.Completado:
        console.log(`La tarea está complatada`)
        break;

    case Estados.Incompleto:
        console.log(`La tarea NO está complatada`)
        break;
    
    case Estados.Pendiente:
        console.log(`La tarea está pendiente de comprobarse`)
        break;

    default:
        break;
}

// ** Bucles
let listaTareasNueva: Tarea[] = [
    {
        nombre:"Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre:"Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre:"Tarea 1",
        estado: Estados.Completado,
        urgencia: 15
    }
]

//For clásico
listaTareasNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
});

//ForEach
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`)
}

//While
while(tarea1.estado !== Estados.Completado){
    if(tarea1.urgencia == 5){
        tarea1.estado  = Estados.Completado
        break;

    } else{
        tarea1.urgencia ++
    }
}

//Do while
do{
    tarea1.urgencia ++
    tarea1.estado = Estados.Completado
} while(tarea1.estado !== Estados.Completado)


//Funciones

/**
 * Función que muestra un saludo personalizado por consola
 */
function saludar(){
    let nombre = "Angie"
    console.log(`¡Hola ${nombre}!`)
}
//invocación de la función
saludar();

/**
 * Función que muestra un saludo personalizado por consola
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string){
    console.log(`¡Hola ${nombre}!`)
}
saludarPersona("Angie");

/**
 * 
 * @param nombre Nombre de la persona a despedir -OPCIONAL-
 */
function despedirPersona(nombre: string = "Pepe"){
    console.log(`Adiós, ${nombre}!`)
}

despedirPersona(); //Adiós, Pepe
despedirPersona("Alba"); //Adiós, Alba


function despedidaOpcional(nombre?: string){
    if(nombre){
        console.log(`Adiós, ${nombre}!`)

    } else{
        console.log(`Adiós!`)
    }
}

despedidaOpcional("Juanjo"); // ¡Adiós, Juanjo!
despedidaOpcional(); // Adiós!


function variosParams(nombre: string, apellidos?: string, edad: number = 18){
    if(apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    } else{
        console.log(`${nombre} tiene ${edad} años`);
    }
}

variosParams("Angie"); //Angie tiene 18 años
variosParams("Angie", "Moreno"); //Angie Moreno tiene 18 años
variosParams("Angie", undefined, 29); //Angie tiene 30 años
variosParams("Angie", "Moreno", 29); //Angie Moreno tiene 29 años
//variosParams(nombre="Angie", apellidos="Moreno", edad=29); //Angie Moreno tiene 29 años


function ejemploVariosTipos(a: string | number){
    if(typeof(a) === 'string'){
        console.log("A es un string")

    } else if(typeof(a) === 'number'){
        console.log("A es un number")

    } else{
        console.log("A no es un string ni tampoco un number")
        throw Error("A no es un string ni tampoco un number")
    }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);


function ejemploReturn(nombre: string, apellidos: string): string{
    return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Angie", "Moreno"); //Angie Moreno
console.log(ejemploReturn("Angie", "Moreno")); //Angie Moreno


/**
 * 
 * @param nombres es una lista de nombres tipo string.
 */
function ejemploMultipleParams(...nombres: string[]): void{
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParams("Angie");
ejemploMultipleParams("Angie", "Pepe", "Juan", "Alba");


const lista = ["Alberto", "Sandra"]
ejemploMultipleParams(...lista);

function ejemploMultipleParamsLista (nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParamsLista(lista) //Comparar esta línea con la línea 277 ejemploMultipleParams(...lista);


//Arrow functions

type Empleado = {
    nombre: string,
    apellidos: string,
    edad:number
}

let empleadaAngie: Empleado = {
    nombre: "Angie",
    apellidos: "Moreno",
    edad: 29
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`
mostrarEmpleado(empleadaAngie);

const datosEmpleado = (empleado: Empleado): string => {
    if(empleado.edad > 70){
        return `Empleado ${empleado.nombre} está en edad de jubilación`
    } else{
        return `Empleado ${empleado.nombre} está en edad de laboral`
    }
}

datosEmpleado(empleadaAngie) //Empleado Angie está en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => `Cobrar`) => {
    if(empleado.edad > 70){
        return
    } else{
        cobrar(); //callback a ejecutar
    }
}
//obtenerSalario(empleadaAngie,);

const obtenerSalario2 = (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70){
        return
    } else{
        cobrar(); //callback a ejecutar
    }
}
obtenerSalario2(empleadaAngie, () => 'cobrar salario');


const obtenerSalario3 = (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70){
        return
    } else{
        cobrar(); //callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

//obtenerSalario3(empleadaAngie, cobrarEmpleado(empleadaAngie));



//Async functions

async function ejemploAsync(): Promise<string>{
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}
ejemploAsync().then((respuesta => {
    console.log("respuesta", respuesta)
})).catch((error) => {
    console.log("Ha ocurrido un error", error)
}).finally(()=> "Todo ha terminado")


//Generator functions

function* ejemploGenerator(){
    //yield --> para emitir valores

    let index = 0;
    while(index < 5){
        //Emitimos un valor incrementado
        yield index++
    }
}

// Guardamos la función generadora en una variable
let generadora = ejemploGenerator();

//Accedemos a los valores emitidos
console.log(generadora.next().value) //0
console.log(generadora.next().value) //1
console.log(generadora.next().value) //2
console.log(generadora.next().value) //3


//worker 

function* watcher(valor: number){
    yield valor;
    yield* worker(valor);
    yield valor + 10
}


function* worker(valor: number){
    yield valor + 1
    yield valor + 2
    yield valor + 3
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); //0 (lo hace el watcher)
console.log(generatorSaga.next().value); //1 (lo hace el worker)
console.log(generatorSaga.next().value); //2 (lo hace el worker)
console.log(generatorSaga.next().value); //3 (lo hace el worker)
console.log(generatorSaga.next().value); //4 (lo hace el watcher)



//Sobrecarga de funciones
/*
function mostrarError(error:string):void {
    console.log("Ha ocurrido un error: ", error);
}

function mostrarError(error: string, codigo: number):void {
    console.log("Ha ocurrido un error: ", "error, elcódigo es: ", codigo);
}

mostrarError("error", 404);
*/


/*PERSISTENCIA DE DATOS
1. LocalStorage --> Almacena los datos en el vnavegador (no se eliminan automáticamente)
2. SessionStorage --> La diferencia radica en la sesión del navegador. Es decir, los datos se persisten en la sesión del navegador
3. Cookies --> Tienen una fecha de caducidad y también tienen un ámbito de URL
*/


//LocalStorage (set, get, delete, clear)
function guardar():void {
    localStorage.set("nombre", "Angie")
}

function leer():void {
    let nombre = localStorage.get("nombre")
}


//SessionStorage


//Cookies
const cookieOptions = {
    name: "usuario", //string
    value: "Angie", //string
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), //optional date
    path: "/", //optional string
}

//Setear
setCookie(cookieOptions);

//Leer
let cookieLeida = getCookieValue("usuario")

//Eliminar
deleteCookie("usuario");

//Eliminar todas las cookies
deleteAllCookies();


//Class temporizador
class Temporizador{
    public terminar?: () => void;

    public empezar():void {
        setTimeout(()=>{
            //Comprobamos que exista la función terminar
            if(!this.terminar) return;

            //Cuando haya pasado el tiempo se ejecutará la función terminar
            this.terminar();
        }, 10000)
    }
}

const mitemporizador: Temporizador = new Temporizador();

//Definamos la función del callback a ejecutar cuando termine el tiempo (10000 ms)
mitemporizador.terminar = () => {
    console.log("Evento terminado")
}

//Lanzamos el temporizador
mitemporizador.empezar(); //Se inicia el timeout y cuando termine, se ejecuta la función terminar()

//Eliminar la ejecución de la función
delete mitemporizador.terminar;

/*document.getElementById("boton-login").addEventListener('click', () => {
    console.log('Has hecho click en login');
})*/


//**CLASES

//Creamos un curso
//const cursoTS = new Curso("TypeScript", 15)
//const cursoJS = new Curso("JavaScrypt", 20)

//const listaCursos: Curso[] = [];

//listaCursos.push(cursoTS, cursoJS)

//Usamos el MOCK
const listaCursos: Curso[] = LISTA_CURSOS;


//Creamos un estudiante
const angie:Estudiante = new Estudiante("Angie", listaCursos, "Moreno Palacios");

console.log(`${angie.nombre} estudia:`)
//Iteramos por cada uno de ellos
angie.cursos.forEach((curso:Curso)=>{
    console.log(`- ${curso.nombre} (${curso.horas} horas)`);

})

const cursoAngular:Curso = new Curso("Angular", 40)

angie.cursos.push(cursoAngular); //Añadimos

//Conocer las horas estudiadas de un alumno
angie.horasEstudiadas; //number

//Setear el ID
//angie.ID_Estudiante


//Saber la instancia de un objeto/variable
//-TypeOf
//-InstanceOf


//HERENCIA, POLIMORFISMOS, DECORADORES E INTERFACES 

let fechaNacimiento = new Date(1991,10,10);

if(fechaNacimiento instanceof Date){
    console.log(`${fechaNacimiento} es una instancia de Date`)
}

if(angie instanceof Estudiante){
    console.log(`${angie.nombre} es una estudiante`)
}


let trabajador1 = new Trabajador("Martín", "San José", 30, 2000);
let trabajador2 = new Trabajador("Pepe", "García", 21, 1000);
let trabajador3 = new Trabajador("Juan", "González", 40, 3000);

let jefe = new Jefe("Pablo", "García", 50);
jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);

jefe.trabajadores.forEach((trabajador:Trabajador) => {
    console.log(trabajador.nombre)
})

trabajador1.saludar(); //Método definido en Trabajador (THIS)
jefe.saludar(); //Herencia de Persona (SUPER)


//Uso de interfaces

let programar:iTarea = {
    titulo: "Programar en TS",
    descripcion: "Practicar con katas para aprender a desarrollar con TS",
    completada: false,
    resumen: function (): string {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`
    }
}
console.log(programar.resumen())


//Tarea de programación (implementando iTarea)

let programarTS = new Programar ("Typescript", "Tarea de programación en TS", false, Nivel.Bloqueante)
console.log(programarTS.resumen());


//Decoradores experimentales -->@
//-Clases
//-Parámetros
//-Métodos
//-Propiedades


function Override(label:string) {
    return function(target:any, key:string){
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}


class PruebaDecorador {
    @Override('prueba') //llamar a la función Override
    nombre: string = 'Martin'
}

let prueba = new PruebaDecorador();
console.log(prueba.nombre) // "Prueba" siempre va a ser devuelto a través del get()


//Otra función para usarla como decorador
function SoloLectura(target:any, key:string) {
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaSoloLectura{
    @SoloLectura
    nombre:string  = '';
}

let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martin";

console.log(pruebaLectura.nombre) //Undefined, ya que no s ele puede dar valor (es solo lectura)


//Decorador para parámetros de un método
function mostrarPosicion(traget:any, propertyKey:string, parameterIndex:number){
    console.log("Posición", parameterIndex);
}

class PruebaMetodoDecorador{
    prueba(a:string, @mostrarPosicion b:boolean){
        console.log(b)
    }
}

//Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba("hola", false)