import  { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [priority, setPriority] = useState('normal');
  const [completed, setCompleted] = useState(false);

  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleToggle = () => setCompleted((prev) => !prev);

  return (
    <div className={`task-item ${priority}`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <label className="toggle">
          <input type="checkbox" checked={completed} onChange={handleToggle} />
          <span className="slider" />
          <span className="toggle-label">Concluído</span>
        </label>
      </div>

      <p>{task.description}</p>

      <div className="priority-group">
        <label>
          <input
            type="radio"
            name={`priority-${task.id}`}
            value="low"
            checked={priority === 'low'}
            onChange={handlePriorityChange}
          />
          Baixa
        </label>
        <label>
          <input
            type="radio"
            name={`priority-${task.id}`}
            value="normal"
            checked={priority === 'normal'}
            onChange={handlePriorityChange}
          />
          Normal
        </label>
        <label>
          <input
            type="radio"
            name={`priority-${task.id}`}
            value="high"
            checked={priority === 'high'}
            onChange={handlePriorityChange}
          />
          Alta
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
