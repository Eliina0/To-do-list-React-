import React from 'react';
import Button from '../components/Button';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";


const Task = ({ task, index, deleteTask, editTask, toggleComplete, setEditingIndex, isEditing }) => {
    const handleSave = (editText) => {
        if (editText.trim()) {
            console.log(editText);
            
            editTask(index, editText);
            setEditingIndex(null); 
        }
    };

    return (
        <li className={`task ${task.completed ? 'completed' : ""}`}>
            {isEditing ? (
                <input 
                    type="text" 
                    defaultValue={task.text} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSave(e.target.value); 
                        }
                    }}
                />
            ) : (
                <span onClick={() => toggleComplete(index)}>{task.text}</span>
            )}
            <div>
                {!isEditing && <Button title={<CiEdit />} onClick={() => setEditingIndex(index)} color="#3498db"/>}
                <Button title={<AiOutlineDelete />} onClick={() => deleteTask(index)} color="#e74c3c" />
            </div>
        </li>
    );
};

export default Task;
