import React, { useState, useEffect } from 'react';
import Form from '../Form';
import Task from '../Task';
import Modal from '../Modal';
import './styles.scss';

import { TASKS_DATA } from '../../data-mock';

const TaskList = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskBody, setTaskBody] = useState('');
  const [tasks, setTasks] = useState(TASKS_DATA);
  const [modalOpened, setModalOpened] = useState(false);

  const taskList = tasks.map((task, i) => {
    return (
      <li key={i}>
        <Task id={i} title={task.title} body={task.body}></Task>
      </li>
    );
  });

  // Form methods
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

  // Modal methods
  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <div className="task-list">
      <ul>{taskList}</ul>

      <button onClick={openModal}>Open task form</button>

      <Modal opened={modalOpened} openModal={openModal} closeModal={closeModal}>
        <Form title="Add Task" onFormSubmit={onFormSubmit}>
          <input
            type="text"
            value={taskTitle}
            onChange={onTitleInputChange}
            placeholder="Task"
          />

          <textarea
            rows="5"
            value={taskBody}
            onChange={onBodyInputChange}
            placeholder="Task description"
          />

          <button type="submit">Add</button>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskList;
