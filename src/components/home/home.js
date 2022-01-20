import { Button, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ToDo from "../../Todo";

export default function HomeComponent({ addTask }) {
    const [task, setTask] = useState('')
    const inp = useRef(null);

    function handleInput(e) {
        if (e.code === 'Enter') {
            setTask('');
            const toDo = new ToDo(task, Date.now(), false);
            addTask(toDo);
        }
    }

    return (
        <div>
            <h1>Welcome to To-Do List</h1>
            <p>Enter your Tasks below </p>
            <Input value={task} _hover={{ opacity: '0.5' }} placeholder='I will go for walking...' width={500}
                onKeyDown={(e) => handleInput(e)} onChange={(e) => setTask(e.target.value)} ref={inp} />
            <Button colorScheme='teal' variant='outline' margin={'5px'}
                onClick={(e) => {
                    if (inp.current.value !== '') {
                        setTask(inp.current.value);
                        const toDo = new ToDo(task, Date.now(), false);
                        addTask(toDo);
                    }
                }}
            >
                Add
            </Button>
        </div >
    )
}