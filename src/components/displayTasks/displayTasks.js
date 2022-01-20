import { Badge, Checkbox, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeToDoAction, toggleStatusOfToDoAction } from "../../redux/todoaction";
import { AiFillDelete } from 'react-icons/ai';
import './displayTask.css'


var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function TaskItem({ task, index }) {
    const taskDate = new Date(task.date);
    const dispatch = useDispatch();
    const status = () => {
        if (task.status === true) {
            return <Badge colorScheme='green'>Done</Badge>
        }
        return <Badge colorScheme='red'>Not Completed</Badge>
    }

    const textStatus = () => {
        if (task.status)
            return 'task-row-done'
    }

    return (
        <Tr className={textStatus()}>
            <Td>{index}</Td>
            <Td>{task.task}</Td>
            <Td>{status()}</Td>
            <Td>{taskDate.toLocaleDateString("us-en", options)}</Td>
            <Td>
                <Checkbox
                    onChange={(e) => dispatch(toggleStatusOfToDoAction(index - 1))}
                    defaultIsChecked={task.status} colorScheme='green' >
                </Checkbox>
            </Td>
            <Td>
                <AiFillDelete onClick={() => dispatch(removeToDoAction(index - 1))} />
            </Td>
        </Tr>
    )
}

export default function DisplayTaskComponent({ tasks }) {
    return (
        <div>
            <Table className="task-list">
                <Thead>
                    <Tr>
                        <Th>S.No </Th>
                        <Th>Task Description</Th>
                        <Th>Task Status</Th>
                        <Th>Created on</Th>
                        <Th>Status</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        tasks.map((task, index) => {
                            return <TaskItem task={task} index={index + 1} key={index} />
                        })
                    }
                </Tbody>
            </Table >
        </div >)
}