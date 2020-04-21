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
    <button className="b3" onClick={props.onDelete}>x</button>
    </div>
);