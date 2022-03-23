import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";

import vector from "../assets/img/vector.svg";
import cross from "../assets/img/cross.svg";
import Task from "./Task";

const Tasks = ({
    tasks,
    addTask,
    title,
    deleteTask,
    deleteColumn,
    id,
    ColumnId,
}) => {
    const [add, setAdd] = useState(false);
    const [task, setTask] = useState("");

    const confirmTask = (e) => {
        addTask(task, title);
        setAdd(false);
        setTask("");
    };

    return (
        <Droppable droppableId={`${id}`}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="tasks"
                >
                    <div className="tasks__title">
                        <p>{title}</p>
                        <img
                            onClick={() => deleteColumn(title)}
                            src={cross}
                            alt="cross"
                        />
                    </div>
                    <ul className="tasksController">
                        {tasks.map((item, index) => (
                            <Task
                                deleteTask={deleteTask}
                                ColumnId={ColumnId}
                                key={item.id}
                                index={index}
                                {...item}
                            />
                        ))}
                    </ul>
                    {provided.placeholder}

                    {!add ? (
                        <div
                            onClick={() => setAdd(true)}
                            className="buttonHandle"
                        >
                            <img src={vector} alt="add" />
                            <button>Добавить еще одну карточку</button>
                        </div>
                    ) : (
                        <div className="textareaHandle">
                            <textarea
                                autoFocus
                                className="text"
                                placeholder="Введите название карточки"
                                rows="3"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            ></textarea>
                            <div className="flexContainer">
                                <button onClick={confirmTask}>
                                    Добавить карточку
                                </button>
                                <img
                                    onClick={() => setAdd(false)}
                                    src={cross}
                                    alt="cross"
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Droppable>
    );
};

export default Tasks;
