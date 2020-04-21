import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import TodoList from "./TodoList"

class App extends React.Component {

constructor(){
    super()
    this.state ={
        todos : todosData,
        toggleAllComplete:true
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(id){
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo =>{
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}

render(){
    //const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
        <div>
        <div className="todo-list">
        {TodoItem}
        </div>
        </div>
    )
    }
}

export default App