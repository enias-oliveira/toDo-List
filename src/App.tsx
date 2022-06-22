import { useState } from 'react'
import uuid from 'react-uuid'

import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'

import styles from './App.module.css'
import { Tasks } from './components/Tasks'
import './styles/global.css'

export interface Task {
  id: string
  completed: boolean
  description: string
}

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      completed: false,
      description: 'Hello there',
    },
    {
      id: uuid(),
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
              {
                id: uuid(),
                completed: false,
                description: newTaskDescription,
              },
            ])
          }}
        />

        <Tasks
          data={tasks}
          onCheckTask={(task: Task) => {
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
          }}
          onDeleteTask={(task: Task) => {
            setTasks((prevTasks) =>
              prevTasks.filter(
                (prevTask) => prevTask.description !== task.description,
              ),
            )
          }}
        />
      </div>
    </>
  )
}
