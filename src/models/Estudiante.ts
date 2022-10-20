import { Curso } from "./Curso";


export class Estudiante {
    //Propiedades de clase
    nombre:string;
    apellidos?:string;
    cursos:Curso[];

    private ID:String = "5212564";

    //Constructor
    constructor(nombre:string, cursos:Curso[], apellidos?:string){
        //Inicializamos las propiedades
        this.nombre = nombre;
        this.apellidos = apellidos? apellidos: undefined
        this.cursos = cursos
    }

    get horasEstudiadas(): number {

        let horasEstudiadas = 0;

        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        })

        return horasEstudiadas;
    }

    set ID_Estudiante(id:string)  {
        this.ID = id

    }



}