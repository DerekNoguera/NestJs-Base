// este dto es para que el sistema sepa y reconozca que son
// los datos que debe enviar el cliente o la persona que esta realizando

import { TaskStatus } from "../task.entity"
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'
// la cosulta
export class CreateTasksDTO{
    @IsString()  // decorador para que solo acepte string al titulo
    @IsNotEmpty()// decorador para no aceptar espacios vacios
    @MinLength(3) // decorador para que no tenga menos de 10 letras el titulo
    title: string

    @IsString()
    description: string
}
export class UpdateTaskDTO{

    @IsString()  // decorador para que solo acepte string al titulo
    @IsOptional() // para los update se usa IsOptional
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status?: TaskStatus
}