import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import styles from './styles.module.css'

interface NewTaskFormPropTypes {
  onSubmitNewTask: (newTaskDescription: string) => void
}

const NewTaskForm = ({ onSubmitNewTask }: NewTaskFormPropTypes) => {
  const [newTaskDescription, setNewTaskDescription] = useState('')

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        onSubmitNewTask(newTaskDescription)
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
  )
}

export { NewTaskForm }
