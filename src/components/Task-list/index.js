import React, { useState, useEffect } from 'react';
import Form from '../Form';
import Task from '../Task';
import './styles.scss';

import { TASKS_DATA } from '../../data-mock';

const TaskList = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskBody, setTaskBody] = useState('');
  const [tasks, setTasks] = useState(TASKS_DATA);

  useEffect(() => {
    // console.log({ taskTitle });
    // console.log({ tasks });
  }, [taskTitle, taskBody, tasks]);

  const taskList = tasks.map((task, i) => {
    return (
      <li key={i}>
        <Task id={i} title={task.title} body={task.body}></Task>
      </li>
    );
  });

  const onTitleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const onBodyInputChange = (e) => {
    setTaskBody(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      { title: taskTitle, body: taskBody, completed: false },
    ]);
  };

  return (
    <div className="task-list">
      <ul>{taskList}</ul>

      <Form onFormSubmit={onFormSubmit}>
        <input type="text" value={taskTitle} onChange={onTitleInputChange} />

        <input type="textarea" value={taskBody} onChange={onBodyInputChange} />

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default TaskList;
