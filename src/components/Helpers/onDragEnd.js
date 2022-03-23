const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source.tasks);
    const destClone = Array.from(destination.tasks);
    let [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    return {
        source: { tasks: sourceClone, id: source.id },
        destination: { tasks: destClone, id: destination.id },
    };
};

const getList = (state, id) => {
    let res = null;
    state.columns.forEach(column => {
        if (column.id === id) {
            res = column.tasks;
        }
    });
    return { tasks: res, id };
};

const onDragEnd = (result, dispatch, state) => {
    let { source, destination } = result;
    // dropped outside the list
    if (!result.destination) {
        return;
    }

    if (source.droppableId === destination.droppableId) {
        let tasks = null;
        state.columns.forEach(column => {
            if (column.id === source.droppableId) {
                tasks = column.tasks;
            }
        });
        const items = reorder(
            tasks,
            result.source.index,
            result.destination.index
        );

        dispatch({ type: "SET_TASKS", items, id: source.droppableId });
    } else {
        let items = move(
            getList(state, source.droppableId),
            getList(state, destination.droppableId),
            source,
            destination
        );

        dispatch({ type: "CHANGE_TASKS", items });
    }
};

export default onDragEnd;
