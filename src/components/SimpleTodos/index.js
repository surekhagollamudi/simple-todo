import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

export default class SimpleTodos extends Component {
  state = {
    todoItemList: initialTodosList,
  }

  deleteTodoItemHandler = deleteTodoItemId => {
    const {todoItemList} = this.state
    const filteredTodoItemListExcludingInputItemId = todoItemList.filter(
      currentTodoItem => currentTodoItem.id !== deleteTodoItemId,
    )

    this.setState({
      todoItemList: filteredTodoItemListExcludingInputItemId,
    })
  }

  render() {
    const {todoItemList} = this.state

    return (
      <div className="simple-todos-container">
        <div className="simple-todos-content-container">
          <h1 className="simple-todos-header">Simple Todos</h1>
          <ul className="todo-item-list-container">
            {todoItemList.map(currentTodoItem => (
              <TodoItem
                key={currentTodoItem.id}
                id={currentTodoItem.id}
                title={currentTodoItem.title}
                deleteTodoItemHandler={this.deleteTodoItemHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
