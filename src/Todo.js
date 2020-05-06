import React from 'react'

const completedStyle ={
    fontStyle: "italics",
    color: "red",
    textDecoration:"line-through"
}

export default props => (
    <div className="todo-item" onClick={props.toggleComplete}>
    <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChange(props.todo.id)}/>
    <p style={props.todo.completed? completedStyle : null}>{props.todo.text}</p>
    <button className="trash-btn" onClick={props.onDelete}><i className="fas fa-trash"></i></button>
    </div>
);