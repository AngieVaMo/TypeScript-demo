export enum Nivel {
    "Informayiva",
    "Urgente",
    "Bloqueante"
}


//Interface sirve para definir la firma y los puntos necesarios a implementar por quien la use
export interface iTarea {
    titulo: string,
    descripcion?: string,
    completada: boolean,
    urgencia?: Nivel,
    resumen: () => string
}