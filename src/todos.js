import React from 'react';

const Todos=({deleteTodos,todos}) => {
    const todoItems = [];
    todos.forEach(todoList => {
        todoItems.push(
            <ul className = "list" key = {todoList.id}>
                <li >{todoList.name} <button className="btn btn-delete" onClick = {() => {deleteTodos(todoList.id)}}>X</button></li>
            </ul>
        )
    });

    return(
        <div className = "list-container">
            <ul className = "list">
                {todoItems}
            </ul>
        </div>
    )
}
export default Todos;