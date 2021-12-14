import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.css';

//detalhe das tasks
const TaskDetails = () => {
    const params = useParams(); //retorna os paramentros da URL
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h2>
                    {params.taskTitle}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, recusandae vitae. Quisquam maxime alias non, id incidunt odio voluptates neque aut voluptatem voluptatibus natus quod, accusamus ipsam illum debitis ut?
                </p>
            </div>
        </>
      );
}
 
export default TaskDetails;