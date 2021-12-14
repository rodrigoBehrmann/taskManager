import React from "react";
import Task from "./Task";

//task com botao de completar e deletar
const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) =>{
    return(
        <>
            {tasks.map(task => (
                <Task 
                    key={task.id}
                    task ={task} 
                    handleTaskClick = {handleTaskClick} 
                    handleTaskDeletion = {handleTaskDeletion} 
                />
            ))}
        </>
    )
};

export default Tasks;