import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoAction } from "../../redux/todoaction";
import DisplayTaskComponent from "../displayTasks/displayTasks";
import HomeComponent from "../home/home";

function MainComponent() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch();
    function addTask(toDo) {
        dispatch(addToDoAction(toDo));
    }
    return (
        <div>
            <HomeComponent addTask={addTask} />
            <DisplayTaskComponent tasks={todos.todos} isLoading={todos.isLoading} />
        </div>
    )
}

export default MainComponent;