

import { FormTodo } from './_todo/FormTodo'

import styles from './Todo.module.css'

export function Todo() {
    return (
        <>
            <main className={styles.todoContainer}>
                <section className={styles.todoContent}>
                    <FormTodo />
                </section>
            </main>
        </>
    )
}