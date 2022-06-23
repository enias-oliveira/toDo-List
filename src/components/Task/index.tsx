import { Check, Trash } from 'phosphor-react'
import { TaskData } from '../../App'

import styles from './styles.module.css'

interface TaskPropTypes {
  data: TaskData
  onCheckTask: () => void
  onDeleteTask: () => void
}

const Task = ({ data: task, onCheckTask, onDeleteTask }: TaskPropTypes) => (
  <li>
    <label>
      <input type='checkbox' onChange={onCheckTask} />
      <span
        className={`${styles.checkboxCircle} ${
          task.completed ? styles.checkboxActive : styles.checkboxDefault
        }`}
      >
        {task.completed && <Check size={10} weight='bold' />}
      </span>
      <div className={task.completed ? styles.checkedTask : styles.defaultTask}>
        {task.description}
      </div>
    </label>
    <button className={styles.checkButton} onClick={onDeleteTask}>
      <Trash size={16} />
    </button>
  </li>
)

export { Task }
