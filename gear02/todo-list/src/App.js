import { nanoid } from "nanoid";
import React, { useState } from 'react';

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
// import logo from './logo.svg';
import './App.css';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const taskList = tasks.map(task => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name}/>
  ));
  const tasksNoun = (taskList.length === 1) ? 'Task' : 'Tasks';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask])
  };

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  };

  const [filter, setFilter] = useState('All');

  return (
    <div className="todoapp stack-large">
      <h1>Remind me</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
