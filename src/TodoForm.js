import React from "react"
import shortid from 'shortid'


  class TodoForm extends React.Component {
      
    state = {
        text: ''
      };

    handleSubmit=(e)=> {
      e.preventDefault(); //so it does not refresh
      this.props.onSubmit({
        id:shortid.generate(),
        text: this.state.text,
        complete: false
      });
      this.setState({
        text:''
      });
    };


    handleChange=(e)=> {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    render() {
      //const items = this.state.toDoList.map(i=><li>{i}</li>);
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className = 'todo-input'
            type="text"
            name="text" 
            value={this.state.text} 
            onChange={this.handleChange} 
            placeholder="Enter to-do items here"/>
          <button className="todo-button" type="submit" onClick={this.handleSubmit}>
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
        <h1 style={{textAlign:"center"}}>My To Do List:</h1>
      </div>
      );
    }
  };
  
  export default TodoForm