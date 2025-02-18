import { useState } from 'react';

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            task,
            id: Math.floor(Math.random() * 10000),
            completed: false
        });
        setTask('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add a todo...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    )
};

export default TodoForm;