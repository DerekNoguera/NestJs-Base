import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDTO, UpdateTaskDTO } from './dto/tasks.dot'; // importamos el dto para saber lo datos que necesita traer

@Controller('tasks')
export class TasksController {


    // constructor para inyerctar la clase de tasksService
    constructor(private TasksService: TasksService) { }

    // hacemos un metodo GET()
    @Get()
    getAllTasks() {
        return this.TasksService.getAllTasks() // usa el metodo de get
    }


    // llamamos el metodo CreateTasks del taskService.ts
    @Post()
    createTask(@Body() newTasks: CreateTasksDTO) {// el newTasks necesita 2 valores si no tira error
        return this.TasksService.createTasks(newTasks.title, newTasks.description)
    }// por el momento se pueden hacer las peteciones de prueba con thunderClient


    
    // Llamamos el metodo DeleteTask de task.Service.ts
    @Delete(':id') //despues de /tasks del endponit va a recibir un id, ese id se usara,  // para eliminar datos. Ex: /tasks/1, elimina la tarea con id = 1
    deleteTask(@Param('id') id: string){ // para extraer ese id de la url, usa @Param, envia el nombre y el tipo de dato
        return this.TasksService.deleteTasks(id)
    }


    // usamos patch y no put pq put actualiza todo el objeto, Patch actualiza los datos parcialment
    // por ejemplo, si quiero actualizar solmanete el titulo, uso patch
    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDTO){ // para extraer ese id de la url, usa @Param, envia el nombre y el tipo de dato
        // llamamos el DTO para actualizar tareas del archivo de entity
        return this.TasksService.updateTasks(id, updateFields) // envia los datos y el id 
    }
}
