import './index.css'

const TodoItem = props => {
  const {id, title, deleteTodoItemHandler} = props

  const onClickDeleteHandler = () => {
    deleteTodoItemHandler(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-item-title">{title}</p>
      <button
        type="button"
        className="todo-item-delete-button"
        onClick={onClickDeleteHandler}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
