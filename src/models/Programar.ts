import { iTarea, Nivel } from "./interfaces/iTarea";

export class Programar implements iTarea {
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean;
    urgencia?: Nivel | undefined;

    constructor(titulo:string, descripcion:string, compleatda:boolean, urgencia:Nivel){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = compleatda;
        this.urgencia = urgencia
    }

    resumen = () => {
        return `Tarea de programación: ${this.titulo} - ${this.completada}`

    }
}