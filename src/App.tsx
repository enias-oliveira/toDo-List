import { Check, PlusCircle, Trash } from 'phosphor-react'

import { Header } from './components/Header'
import ClipboardIcon from './assets/clipboard-icon.svg'

import './styles/global.css'
import styles from './App.module.css'
import { FormEvent, useState } from 'react'

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

  const [newTaskDescription, setNewTaskDescription] = useState('')

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form
          className={styles.newTaskWrapper}
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            setTasks((prevTasks) => [
              ...prevTasks,
              { completed: false, description: newTaskDescription },
            ])
            setNewTaskDescription('')
          }}
        >
          <input
            type='text'
            name='new-task'
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder='Adicione uma nova tarefa'
          />
          <button type='submit' name='add-new-task'>
            Criar <PlusCircle />
          </button>
        </form>

        <div className={styles.tasks}>
          <header>
            <strong className={styles.createdTasksCount}>
              Tarefas criadas<span>0</span>
            </strong>
            <strong className={styles.completedTasksCount}>
              Concluídas<span>0</span>
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
