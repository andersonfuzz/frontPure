import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = () => {
  // Temporariamente simulando algumas tarefas
  const tasks = [
    { id: 1, title: 'Comprar pão', description: 'Ir na padaria antes das 8h' },
    { id: 2, title: 'Estudar React', description: 'Hooks e componentização' },
    { id: 3, title: 'Treinar', description: 'Treino A - superior' }
  ];

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
