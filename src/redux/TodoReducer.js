import { ADD_TODO, REMOVE_TASK, TOGGLE_STATUS } from "./todoaction";



export default function ToDoReducer(state = {
    todos: [],
    isLoading: false
}, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTask = action.payload;
            let currentTasks = state.todos;
            currentTasks.push(newTask);
            return {
                ...state,
                todos: currentTasks
            }

        case TOGGLE_STATUS:
            const currentToDos = Object.assign(state.todos);
            currentToDos[action.payload].status = !currentToDos[action.payload].status;
            return {
                ...state,
                todos: currentToDos
            }
        case REMOVE_TASK:
            console.log('I am in ..')
            const newToDos = Object.assign(state.todos.filter((task, index) => {
                return index !== action.payload
            }))
            return {
                ...state,
                todos: newToDos
            }
        default:
            return state;
    }
}