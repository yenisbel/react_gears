import React from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
// import logo from './logo.svg';
import './App.css';

function App(props) {
  const taskList = props.tasks.map(task => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed}/>
  ));
  return (
    <div className="todoapp stack-large">
      <h1>Remind me</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        Tasks remaining
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
