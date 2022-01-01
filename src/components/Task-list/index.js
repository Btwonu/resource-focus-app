import React, { useState, useEffect } from 'react';
import './styles.scss';

import { TASKS_DATA } from '../../data-mock';

const TaskList = () => {
  const [taskValue, setTaskValue] = useState('');
  const [tasks, setTasks] = useState(TASKS_DATA);

  useEffect(() => {
    console.log({ taskValue });
    console.log({ tasks });
  }, [taskValue, tasks]);

  const taskList = tasks.map((task, i) => {
    return (
      <li key={i}>
        <label htmlFor={i}>{task.title}</label>

        <p></p>

        <input id={'todo-' + i} type="checkbox" defaultChecked={false} />
      </li>
    );
  });

  const onInputChange = (e) => {
    setTaskValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title: taskValue, body: '', completed: false }]);
  };

  return (
    <div className="task-list">
      <ul>{taskList}</ul>

      <form onSubmit={onFormSubmit}>
        <input type="text" value={taskValue} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default TaskList;
