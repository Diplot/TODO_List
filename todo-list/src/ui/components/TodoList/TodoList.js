import React, {Component} from "react";
import TodoItem from "../TodoItem/TodoItem";


export default class TodoList extends Component {
    render() {
        const {items , clearList, handleDelete, handleEdit , handleCheck, handlePriority} = this.props;
        const activeTasks = items.filter( task => task.complete === false);
        const completedTasks = items.filter( task => task.complete === true);
        const priorityTasks = [...activeTasks ,...completedTasks].filter( task => task.priority === true);
        const commonTasks = [...activeTasks ,...completedTasks].filter( task => task.priority === false);
        const finalTasks = [...priorityTasks,...commonTasks].map(item => {
            return <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)}
                priority={item.priority}
                handleCheck={()=>handleCheck(item.id)}
                handlePriority={()=>handlePriority(item.id)}
            />
        });
        return (

            <ul className={"list-group my-5"}>
                {
                    finalTasks
                }
                <button
                    type={"button"}
                    className={"btn btn-danger text-capitalize mt-5 with-100"}
                    onClick={clearList}
                >
                    Clear list
                </button>
            </ul>
        )
    }
}