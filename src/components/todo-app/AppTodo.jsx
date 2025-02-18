// import React from 'react';
// import './App.css';
// import TodoForm from './components/TodoForm';
// import ToDoList from './components/TodoList';
// import useLocalStorage from './hooks/useLocalStorage';
// import FilterButtons from './components/FilterButtons';

// function Todo() {
//   const [tasks, setTasks] = useLocalStorage('tasks', []);
//   const [filter, setFilter] = useLocalStorage('filter', 'all');

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo;
//       })
//     );
//   };

//   const removeTask = (id) => {
//     setTasks(tasks.filter((todo) => todo.id !== id));
//   };

//   const editTask = (id) => {
//     const newTask = window.prompt('Edit Task', tasks.find((todo) => todo.id === id)?.task || "");
//     setTasks(
//       tasks.map((todo) => 
//         todo.id === id ? { ...todo, task: newTask} : todo
//     )
//   );
// };

// const getFilteredTasks = () => {
//   switch (filter) {
//     case 'completed':
//       return tasks.filter((todo) => todo.completed);
//     case 'active':
//       return tasks.filter((todo) => !todo.completed);
//     default:
//       return tasks;
//   }
// };

//   return (
//     <>
//       <div>
//         <h1>To-Do List</h1>
//         <TodoForm addTask={addTask} />
//         <ToDoList tasks={getFilteredTasks()} toggleComplete={toggleComplete} removeTask={removeTask} editTask={editTask} />
//         <FilterButtons filter={filter} setFilter={setFilter} />
//       </div>
//     </>
//   );
// }

// export default Todo;
