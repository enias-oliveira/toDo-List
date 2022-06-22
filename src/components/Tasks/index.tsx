import { Check, Trash } from 'phosphor-react'
import { Task } from '../../App'
import ClipboardIcon from '../../assets/clipboard-icon.svg'
import styles from './styles.module.css'

interface TasksPropTypes {
  data: Task[]
  onCheckTask: (task: Task) => void
  onDeleteTask: (task: Task) => void
}

const Tasks = ({ data: tasks, onCheckTask, onDeleteTask }: TasksPropTypes) => (
  <div className={styles.wrapper}>
    <header>
      <strong className={styles.createdTasksCount}>
        Tarefas criadas<span>{tasks.length}</span>
      </strong>
      <strong className={styles.completedTasksCount}>
        Concluídas
        <span>
          {tasks.reduce((acc, cur) => (cur.completed ? acc + 1 : acc), 0)} de{' '}
          {tasks.length}
        </span>
      </strong>
    </header>
    <main>
      {tasks.length === 0 ? (
        <div className={styles.emptyList}>
          <img src={ClipboardIcon} alt='clipboard icon' />
        </div>
      ) : (
        <ul className={styles.tasksList}>
          {tasks.map((task) => (
            <li>
              <label>
                <input type='checkbox' onChange={() => onCheckTask(task)} />
                <span
                  className={
                    task.completed ? styles.checkboxActive : styles.checkbox
                  }
                >
                  {task.completed && <Check size={10} weight='bold' />}
                </span>
                <p
                  className={
                    task.completed ? styles.checkedTask : styles.defaultTask
                  }
                >
                  {task.description}
                </p>
              </label>
              <button onClick={() => onDeleteTask(task)}>
                <Trash size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  </div>
)

export { Tasks }
