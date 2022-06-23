import { PlusCircle } from 'phosphor-react'
import { ChangeEventHandler, FormEvent, useState } from 'react'
import styles from './styles.module.css'

interface NewTaskFormPropTypes {
  onSubmitNewTask: (newTaskDescription: string) => void
}

const NewTaskForm = ({ onSubmitNewTask }: NewTaskFormPropTypes) => {
  const [newTaskDescription, setNewTaskDescription] = useState('')

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    onSubmitNewTask(newTaskDescription)
    setNewTaskDescription('')
  }

  const taskDescriptionChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => setNewTaskDescription(e.target.value)

  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
      <input
        type='text'
        name='new-task'
        value={newTaskDescription}
        onChange={taskDescriptionChangeHandler}
        placeholder='Adicione uma nova tarefa'
      />
      <button type='submit' name='add-new-task'>
        Criar <PlusCircle />
      </button>
    </form>
  )
}

export { NewTaskForm }
