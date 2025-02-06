import { Task } from './Task';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Plus, Minus, Check } from 'phosphor-react';
import EmptyTask from '../../assets/EmptyTasks.svg';

import styles from './FormTodo.module.css'

export interface TasksType {
    id: number;
    task: string;
    status: boolean;
}

export function FormTodo() {
    const [tasks, setTasks] = useState<TasksType[]>([]);
    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        const newTaskObject = {
            id: tasks.length + 1,
            task: newTask,
            status: false
        }

        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    }

    function handleNewTaslInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.preventDefault();

        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleToggleTask(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();

        const isChecked = tasks.every(task => task.status);

        const updatedTasks = tasks.map(task => ({ ...task, status: !isChecked }));
        setTasks(updatedTasks);
    }

    function countTasksDone() {
        return tasks.filter(task => task.status);
    }

    function checkTask(id: number) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        tasks[taskIndex].status = !tasks[taskIndex].status;

        setTasks([...tasks]);
    }

    function deleteTask(id: number) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    const hasTasks = tasks.length > 0;
    const isChecked = tasks.every(task => task.status);

    return (
        <>
            <form className={styles.createTodo} onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaslInvalid}
                    value={newTask}
                    required
                    />
                <button type="submit">
                    <span>Criar</span>
                    <Plus
                        className={styles.plusIcon}
                        size={20}
                        />
                </button>
            </form>

            <div className={styles.taskDetails}>
                <span className={styles.created}>
                    Tarefas criadas
                    <span className={styles.size}>{tasks.length}</span>
                </span>                
                <span className={styles.done}>
                    Tarefas concluídas
                    <span className={styles.size}>{countTasksDone().length}</span>
                </span>
            </div>

            {!hasTasks &&
                <div className={styles.emptyTasks}>
                    <img
                        src={EmptyTask}
                        alt="Nenhuma tarefa cadastrada"
                    />
                    <h3>Você ainda não tem tarefas cadastradas</h3>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }

            <ul>
                {hasTasks && tasks.length > 1 &&
                    <div className={styles.header}>
                        <button type="submit" onClick={handleToggleTask}>
                            <span>{isChecked ? 'Desmarcar todas' : 'Marcar todas'}</span>
                            <Check
                                className={styles.plusIcon}
                                size={20}
                                />
                        </button>
                    </div>
                }
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task.task}
                        id={task.id}
                        status={task.status}
                        onCheckTask={checkTask}
                        onDeleteTask={deleteTask}
                    />
                ))}
            </ul>
            <div className={styles.footer}>
                {hasTasks &&
                    <button type="submit" onClick={() => setTasks([])}>
                        <span>Remover Todas</span>
                        <Minus
                            className={styles.plusIcon}
                            size={20}
                            />
                    </button>
                }
            </div>
        </>
    )
}