import React, { useState } from 'react';
import './styles.scss';

const Task = ({ id, title, body, completed }) => {
  const [bodyShown, setBodyShown] = useState(false);

  const onShowBodyClick = () => {
    setBodyShown(!bodyShown);
  };

  return (
    <div className="task">
      <div className="task__head">
        <label htmlFor={id}>{title}</label>

        <input id={'todo-' + id} type="checkbox" defaultChecked={completed} />
      </div>

      <div className={`task__body ${bodyShown ? 'active' : ''}`}>
        <p>{body}</p>
      </div>

      <button onClick={onShowBodyClick}>Show body</button>
    </div>
  );
};

export default Task;
