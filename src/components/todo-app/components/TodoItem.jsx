const TodoItem = ({ todo, toggleComplete, removeTask, editTask}) => {
    return (
        <div>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            />
            <span>
                {todo.task}
            </span>
            <button onClick={() => removeTask(todo.id)}>Delete task</button>
            <button onClick={() => editTask(todo.id)}>Edit Task</button>
        </div>
    );
}

export default TodoItem;