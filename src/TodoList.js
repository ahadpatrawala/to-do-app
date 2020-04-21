import React from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"

class TodoList extends React.Component{

state = {
    todos:[],
    toggleAllComplete:true,
    todoToShow:'all'
};

addTodo=(todo) =>{
    this.setState({
        todos:[todo,...this.state.todos]
    });
}

/*toggleComplete=(id)=>{
this.setState({
    todos:this.state.todos.map(todo =>{
        if(todo.id === id){
            return  { 
                ...todo,
                complete: !todo.complete
            };
        }
        else{
            return todo
        }
    })
})
}*/

updateTodoToShow = (s) => {
    this.setState ({
        todoToShow: s
    })
    console.log("fun")
}

handleDeleteTodo = (id) =>{
    this.setState({
        todos: this.state.todos.filter(todo=>todo.id!==id)
    })
}

removeAllTodosThatAreComplete =(id) =>{
    this.setState({
        todos: this.state.todos.filter(todo=>!todo.completed)
    })
}

handleAllComplete=()=>{
    this.setState({
        todos:this.state.todos.map(todo=>({
            ...todo,
            completed:this.state.toggleAllComplete
        })),
        toggleAllComplete: !this.state.toggleAllComplete
    })
}

handleChange = (id) =>{
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

    let todos=[];

    if (this.state.todoToShow === "all"){
        todos = this.state.todos;
    }
    else if(this.state.todoToShow === "active"){
        todos = this.state.todos.filter(todo=>!todo.completed);
    }
    else if(this.state.todoToShow === "complete"){
        todos = this.state.todos.filter(todo=>todo.completed);
    }

    return(
        <div className="todo-list">
            <TodoForm className="todo-list" onSubmit={this.addTodo}/>
            {todos.map(todo =>(
            <Todo key={todo.id} 
            onDelete={()=> this.handleDeleteTodo(todo.id)}
            todo={todo}
            handleChange={this.handleChange}
            />
            ))}
            <div>
                Todo left: {this.state.todos.filter(todo =>!todo.completed).length}
            </div>
            <div>
                Todo completed: {this.state.todos.filter(todo =>todo.completed).length}
            </div>
            <div> 
                <button className="b2" onClick={()=>this.updateTodoToShow("all")}>All</button>
                <button  className="b2"onClick={()=>this.updateTodoToShow("active")}>Active</button>
                <button className="b2" onClick={()=>this.updateTodoToShow("complete")}>Complete</button>
            </div>
          {this.state.todos.some(todo => todo.completed)? ( 
          <div className="toggle">
                <button className="b1 b2" onClick={this.removeAllTodosThatAreComplete}>
                    Remove All Complete Todos
                </button>
            </div>) : null}
            <div className="toggle"> 
                <button className="b1 b2" onClick={this.handleAllComplete}>
                    Toggle All Complete: {`${this.state.toggleAllComplete}`}
                </button>
            </div>
        </div> 
    );
}
}

export default TodoList