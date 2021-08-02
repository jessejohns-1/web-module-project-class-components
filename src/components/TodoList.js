import React from "react"
import ToDo from "./Todo"
import "./Todo.css"
const ToDoList = props => {
    const handleClick =()=> {
        props.handleClear();
    }
    

    return(
        <div className="todolist">

      {props.list.map(item => (
        <ToDo handleLists={props.handleLists} key={item.id} item={item} />
      ))}


      <button onClick={handleClick} >
        Clear completed
      </button>

      
    </div>

    )
}
export default ToDoList