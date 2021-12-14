import React, { useState } from 'react';
import "./AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')
    
    //passa o que é escrito
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    //adiciona a task com o texto
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('');
    }

    //botao de adicionar e input
    return(
        <div className='add-task-container'>
            <input onChange={handleInputChange} 
            value={inputData}
            className='add-task-input'
            type="text" 
            />
            ;
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>        
    );
};
 
export default AddTask;