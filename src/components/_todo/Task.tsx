import { Trash, Check } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskTypeProps {
    task: string;
    status: boolean;
    id?: number;
    onCheckTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

export function Task({ task, status, id, onCheckTask, onDeleteTask }: TaskTypeProps) {

    function handleTaskToggle () {
        if (id !== undefined) {
            onCheckTask(id);
        }
    }

    function handleDeleteTask() {
        if (id !== undefined) {
            onDeleteTask(id);
        }
    }

    const checkboxCheckedClassname = status
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']

    return (
        <li className={styles.taskContainer}>
            <label htmlFor="checkbox" onClick={handleTaskToggle}>
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                {status && <Check size={12} />}
                </span>
                <span>{task}</span>
            </label>
            <button onClick={handleDeleteTask}>
                <Trash size={24} weight="bold" />
            </button>
        </li>
    )
}