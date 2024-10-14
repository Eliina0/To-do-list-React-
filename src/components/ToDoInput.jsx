import React, {useState} from 'react';
import { FiPlus } from "react-icons/fi";

const ToDoInput = ({addTask}) => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        if(!input.trim()) {return};
        console.log(input);
        setInput("");
        addTask(input);
    }

  return (
    <form className='todo-form' onSubmit={handleInput}>
        <input type="text" placeholder='Add a new task...'
               value={input}
               onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn'><FiPlus /></button>
    </form>
  )
}

export default ToDoInput