import { useState } from 'react'
import uuid from 'react-uuid'

import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'

import styles from './App.module.css'
import { Tasks } from './components/Tasks'
import './styles/global.css'

export interface TaskData {
  id: string
  completed: boolean
  description: string
}

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      completed: false,
      description: 'Hello there again',
    },
    {
      id: uuid(),
      completed: true,
      description:
        'Nunc eget lorem dolor, sed? Sagittis vitae et leo duis diam quam nulla porttitor massa id neque',
    },
  ])

  const handleSubmitTask = (newTaskDescription: string) =>
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuid(),
        completed: false,
        description: newTaskDescription,
      },
    ])

  const acquireCheckTaskHandler = (task: TaskData) => () =>
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

  const acquireDeleteTaskHandler = (task: TaskData) => () =>
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== task.id),
    )

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm onSubmitNewTask={handleSubmitTask} />

        <Tasks
          data={tasks}
          acquireCheckTaskHandler={acquireCheckTaskHandler}
          acquireDeleteTaskHandler={acquireDeleteTaskHandler}
        />
      </div>
    </>
  )
}
