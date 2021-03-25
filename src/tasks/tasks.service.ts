import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRespository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRespository)
    private taskRepository: TaskRespository,
  ) {}
  // private tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found!`);
    }
    return found;
  }
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //     id: uuid(),
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   console.log(status);
  //   task.status = status;
  //   return task;
  // }
  // deleteTask(id: string): Task {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id === found.id);
  //   return found;
  // }
}
