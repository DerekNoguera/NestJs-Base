import { Injectable } from '@nestjs/common';
import { Tarea, TaskStatus } from './task.entity';
import {v4} from 'uuid'
import { UpdateTaskDTO } from './dto/tasks.dot';

// importo este tasksService a el controller de Tasks controller
// y lo llamo al decorador que esta dentro de TasksController
@Injectable()
export class TasksService {
    // esto simula nuestra base de datos por el momento hasta conectar una real
    private tasks: Tarea[] = [// tarea[] viene de task.Entity quien es que simula la base de datos
        {
            id: "1",
            title: '23dereek',
            description: 'some tasks',
            status: TaskStatus.PENDING // llama el PEDING de TaskStatus de task.Entity
        }
    ]
    getAllTasks(){
        return this.tasks // este metodo getAllTask() se llamama en el metodo GET de task.controller.ts
        // y retorna todas las tareas que existen en la pritva tasks: Tarea[]
    }
    createTasks(title: string, description: string){
        const tasks = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(tasks)
        return tasks;
    }

    deleteTasks(id: string) { // este metodo lo llamamos en l task.controller.ts
        // recibe el dato y tipo de dato que en este caso seria string
        return this.tasks = this.tasks.filter(task => task.id !== id) 
    }

    getTaskById(id: string){ // metodo para obtener la tarea x el id
        return this.tasks.find(x => x.id === id) 
    }
    updateTasks(id: string, updatedFields: UpdateTaskDTO): Tarea{ // retorna una nueva tarea
        const task = this.getTaskById(id)// busca la tarea x el id

        if (!task) {
            throw new Error(`Tarea con id ${id} no encontrada.`);
            // si no se usa esta validacion es muy probable que de error aqui "assign(task,"
            // diciendo que la tarea puede ser indefinida
        }
        const newTask = Object.assign(task, updatedFields)// combina la tarea encontrada con los nuevos datos
        this.tasks = this.tasks.map(task => task.id === id ? newTask: task)// por medio del id de las tareas mapea para saber cual actualizar
        return newTask
    }
}

// notas de como funciona el metodo assign del metodo UpdateTask, tenemos 
// const x = {name: "23dereek", lastname:"lv"} = output: {name: "23dereek", lastname:"lv"}
// const y = {lastname:"gg"} = output: { lastname:"gg"}
// cuando yo use assign voy a poder actualizar el dato que quiero por ejemplo en este caso seria lastname
// Uso Object.assign(x,y) = output: {name: "23dereek", lastname:"gg"}
