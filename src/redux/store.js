import { combineReducers, createStore } from "redux";
import ToDoReducer from "./TodoReducer";

function loadFromLocalStorage() {
    try {
        const serialisedStore = localStorage.getItem('store');
        if (serialisedStore === null) return undefined;

        return JSON.parse(serialisedStore);
    }
    catch (err) {
        console.warn(err);
    }
}

function saveToLocalStorage(store) {
    try {
        const serialisedStore = JSON.stringify(store);
        localStorage.setItem('store', serialisedStore);
    }
    catch (e) {
        console.warn(e);
    }
}

export const Store = createStore(combineReducers({
    todo: ToDoReducer
}), loadFromLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

Store.subscribe(() => {
    saveToLocalStorage(Store.getState());
})