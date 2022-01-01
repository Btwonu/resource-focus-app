import React from 'react';
import './styles.scss';

const TaskList = () => {
  return (
    <div className="task-list">
      <ul>
        <li>
          <p>Some task</p>

          <input type="checkbox" defaultChecked={false} />
        </li>

        <li>
          <p>Some task</p>

          <input type="checkbox" defaultChecked={false} />
        </li>

        <li>
          <p>Some task</p>

          <input type="checkbox" defaultChecked={false} />
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
