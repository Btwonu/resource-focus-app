import React, { useState, useEffect } from 'react';
import TaskForm from '../Task-form';
import Task from '../Task';
import Modal from '../Modal';
import './styles.scss';

import { TASKS_DATA } from '../../data-mock';

const TaskList = () => {
	const [tasks, setTasks] = useState(TASKS_DATA);
	const [modalOpened, setModalOpened] = useState(false);

	const taskList = tasks.map((task, i) => {
		return (
			<li key={i}>
				<Task id={i} title={task.title} body={task.body}></Task>
			</li>
		);
	});

	return (
		<div className="task-list">
			<ul>{taskList}</ul>

			<Modal>
				<TaskForm />
			</Modal>
		</div>
	);
};

export default TaskList;
