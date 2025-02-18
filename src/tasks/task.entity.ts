export enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
} // status x defecto que se les daran a las tareas


export class Tarea{
    id: string
    title: string
    description: string
    status: TaskStatus
} // datos que espera la tarea

const tasks = new Tarea()