export const addTask = (task, group) => {
	return { type: "ADD_TASK", task, group };
};
