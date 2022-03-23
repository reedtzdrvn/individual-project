export const deleteTask = (id,ColumnId) => {
	return { type: "DELETE_TASK", id,ColumnId };
};
