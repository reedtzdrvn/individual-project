import React, { useReducer } from "react";
import Tasks from "./components/Tasks";
import AddNewColumn from "./components/AddNewColumn/AddNewColumn";
import { DragDropContext } from "react-beautiful-dnd";
import onDragEnd from "./components/Helpers/onDragEnd";
import { reducer, initialState } from "./reducer/reducer";

import { addTask } from "./AC/add-task";
import { addTitle } from "./AC/add-title";
import { deleteTask } from "./AC/delete-task";
import { deleteColumn } from "./AC/delete-column";

const App = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="wrapper">
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, dispatch, state)}
            >
                {state.columns.map((item, index) => (
                    <Tasks
                        key={item.id}
                        ColumnId={item.id}
                        title={item.title}
                        id={item.id}
                        addTask={(task, title) =>
                            dispatch(addTask(task, title))
                        }
                        deleteTask={(id, ColumnId) =>
                            dispatch(deleteTask(id, ColumnId))
                        }
                        deleteColumn={(title) => dispatch(deleteColumn(title))}
                        tasks={item.tasks}
                    />
                ))}
                <AddNewColumn addTitle={(title) => dispatch(addTitle(title))} />
            </DragDropContext>
        </div>
    );
};

export default App;
