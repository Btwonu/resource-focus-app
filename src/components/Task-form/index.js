import React, { useState } from 'react';
import './styles.scss';
import FormInput from '../Form-input';
import Textarea from '../Textarea';

const TaskForm = ({ children }) => {
  const [formState, setFormState] = useState({
    title: '',
    body: '',
    completed: false,
  });

  // Form methods
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('submitting...');
    console.log(formState);

    addTask(formState);

    setFormState({
      title: '',
      body: '',
    });
  };

  return (
    <div className="form-task">
      <h2 className="form__head">Task Form</h2>

      <form onSubmit={onFormSubmit}>
        <div className="form__body">
          <FormInput
            id="task-title"
            name="title"
            type="text"
            placeholder="Title"
            labelName="Enter Title"
            value={formState.title}
            onChange={onChange}
          />

          <Textarea
            id="task-description"
            name="body"
            placeholder="Description"
            labelName="Enter Description"
            value={formState.body}
            onChange={onChange}
          />

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
