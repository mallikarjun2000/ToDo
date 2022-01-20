export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const REMOVE_TASK = 'REMOVE_TASK'

export function addToDoAction(task) {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export function toggleStatusOfToDoAction(taskId) {
    return {
        type: TOGGLE_STATUS,
        payload: taskId
    }
}

export function removeToDoAction(taskId) {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}