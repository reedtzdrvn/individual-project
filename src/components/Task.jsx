import React from "react";
import { Draggable } from "react-beautiful-dnd";

import cross from "../assets/img/cross.svg";

const Task = ({ text, deleteTask, id, index, ColumnId }) => {
    
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <li className="tasks__item">
                        <span>{text}</span>
                        <img
                            onClick={() => deleteTask(id, ColumnId)}
                            src={cross}
                            alt="cross"
                        />
                    </li>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
