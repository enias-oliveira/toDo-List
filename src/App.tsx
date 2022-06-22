import { Check, Trash } from 'phosphor-react'

import ClipboardIcon from './assets/clipboard-icon.svg'
import { Header } from './components/Header'

import { useState } from 'react'
import styles from './App.module.css'
import { NewTaskForm } from './components/NewTaskForm'
import './styles/global.css'

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      completed: false,
      description: 'Hello there',
    },
    {
      completed: true,
      description:
        'Nunc eget lorem dolor, sed? Sagittis vitae et leo duis diam quam nulla porttitor massa id neque',
    },
  ])

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm
          onSubmitNewTask={(newTaskDescription) => {
            setTasks((prevTasks) => [
              ...prevTasks,
              { completed: false, description: newTaskDescription },
            ])
          }}
        />

        <div className={styles.tasks}>
          <header>
            <strong className={styles.createdTasksCount}>
              Tarefas criadas<span>{tasks.length}</span>
            </strong>
            <strong className={styles.completedTasksCount}>
              Concluídas
              <span>
                {tasks.reduce((acc, cur) => (cur.completed ? acc + 1 : acc), 0)}{' '}
                de {tasks.length}
              </span>
            </strong>
          </header>
          <main>
            {tasks.length === 0 ? (
              <div className={styles.emptyTasks}>
                <img src={ClipboardIcon} alt='clipboard icon' />
              </div>
            ) : (
              <ul className={styles.tasksList}>
                {tasks.map((task) => (
                  <li>
                    <label>
                      <input
                        type='checkbox'
                        onChange={() =>
                          setTasks((prevTasks) =>
                            prevTasks.map((prevTask) =>
                              prevTask.description === task.description
                                ? {
                                    ...prevTask,
                                    completed: !prevTask.completed,
                                  }
                                : prevTask,
                            ),
                          )
                        }
                      />
                      <span
                        className={
                          task.completed
                            ? styles.checkboxActive
                            : styles.checkbox
                        }
                      >
                        {task.completed && <Check size={10} weight='bold' />}
                      </span>
                      <p
                        className={
                          task.completed
                            ? styles.checkedTask
                            : styles.defaultTask
                        }
                      >
                        {task.description}
                      </p>
                    </label>
                    <button
                      onClick={() =>
                        setTasks((prevTasks) =>
                          prevTasks.filter(
                            (prevTask) =>
                              prevTask.description !== task.description,
                          ),
                        )
                      }
                    >
                      <Trash size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
