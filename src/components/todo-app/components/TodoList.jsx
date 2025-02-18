import TodoItem from "./TodoItem";

const ToDoList = ({ tasks, toggleComplete, removeTask, editTask}) => {
    return (
        <div>
            {tasks.length === 0 ? <p>No tasks yet!</p> : 
            tasks.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTask={removeTask}
                    editTask={editTask}
                />
            ))}
        </div>
    );
}

export default ToDoList;