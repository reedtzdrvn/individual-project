const generateId = () => {
    return Math.random().toString(10).substr(2, 9);
};

export const initialState = {
    columns: [
        {
            title: "План на месяц",
            tasks: [
                { text: "Пройти курс по React", id: generateId() },
                { text: "Отметить день рождения", id: generateId() },
                {
                    text:
                        "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
                    id: generateId(),
                },
                {
                    text: "Сделать бекенд своего сайта на node.js",
                    id: generateId(),
                },
            ],
            id: generateId(),
        },
        {
            title: "План на день",
            tasks: [{ text: "Пройти курс по React", id: generateId() }],
            id: generateId(),
        },
    ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                columns: state.columns.map((item) => {
                    if (item.title === action.group) {
                        return {
                            ...item,
                            tasks: [
                                ...item.tasks,
                                {
                                    text: action.task,
                                    id: generateId(),
                                },
                            ],
                        };
                    } else return item;
                }),
            };
        case "ADD_TITLE": {
            return {
                ...state,
                columns: [
                    ...state.columns,
                    { title: action.title, tasks: [], id: generateId() },
                ],
            };
        }
        case "DELETE_TASK": {
            return {
                ...state,
                columns: state.columns.map((item) => {
                    if (item.id === action.ColumnId) {
                        return {
                            ...item,
                            tasks: item.tasks.filter(
                                (task) => task.id !== action.id
                            ),
                        };
                    }
                    return item;
                }),
            };
        }
        case "DELETE_COLUMN": {
            return {
                ...state,
                columns: state.columns.filter(
                    (item) => item.title !== action.title
                ),
            };
        }
        case "SET_TASKS":
            return {
                ...state,
                columns: state.columns.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, tasks: action.items };
                    }
                    return item;
                }),
            };
        case "CHANGE_TASKS":
            return {
                ...state,
                columns: state.columns.map((column) => {
                    if (column.id === action.items.source.id) {
                        return { ...column, tasks: action.items.source.tasks };
                    } else if (column.id === action.items.destination.id) {
                        return {
                            ...column,
                            tasks: action.items.destination.tasks,
                        };
                    }
                    return column;
                }),
            };
        default:
            return state;
    }
};
